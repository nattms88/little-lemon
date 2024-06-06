import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReservationForm from "./ReservationForm";

describe("ReservationForm", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <BrowserRouter>
        <ReservationForm />
      </BrowserRouter>
    );
  });

  test("Renders the ReservationForm heading", () => {
    const headingElements = screen.getAllByText("Reserve a Table");
    const headingElement = headingElements.find(
      (element) => element.tagName === "H2"
    );
    expect(headingElement).toBeInTheDocument();
  });

  test("Renders name input with correct attributes", () => {
    const nameInput = screen.getByLabelText(/Name:/i);
    expect(nameInput).toBeRequired();
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveAttribute("placeholder", "Enter your name");
  });

  test("Renders email input with correct attributes", () => {
    const emailInput = screen.getByLabelText(/Email:/i);
    expect(emailInput).toBeRequired();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "Enter your email");
  });

  test("Renders date input with correct attributes", () => {
    const dateInput = screen.getByLabelText(/Date:/i);
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute(
      "min",
      new Date().toISOString().split("T")[0]
    );
  });

  test("Renders time select with correct attributes", () => {
    const timeSelect = screen.getByLabelText(/Time:/i);
    expect(timeSelect).toBeRequired();
  });

  test("Renders number of guests input with correct attributes", () => {
    const numGuestsInput = screen.getByLabelText(/Guests:/i);
    expect(numGuestsInput).toBeRequired();
    expect(numGuestsInput).toHaveAttribute("type", "number");
    expect(numGuestsInput).toHaveAttribute("min", "1");
    expect(numGuestsInput).toHaveAttribute("max", "10");
  });

  test("Renders occasion select with correct attributes", () => {
    const occasionSelect = screen.getByLabelText(/Occasion:/i);
    expect(occasionSelect).not.toBeRequired();
  });

  test("Renders special requests textarea with correct attributes", () => {
    const specialRequestsTextarea = screen.getByLabelText(/Requests:/i);
    expect(specialRequestsTextarea).not.toBeRequired();
  });

  test("Submit button is disabled when form is invalid", () => {
    const submitButton = screen.getByRole("button", {
      name: /On Click/i,
    });
    expect(submitButton).toBeDisabled();
  });

  const fillForm = ({
    name = "",
    email = "",
    date = "",
    time = "",
    numGuests = 1,
  }) => {
    fireEvent.change(screen.getByLabelText(/Name:/i), {
      target: { value: name },
    });
    fireEvent.change(screen.getByLabelText(/Email:/i), {
      target: { value: email },
    });
    fireEvent.change(screen.getByLabelText(/Date:/i), {
      target: { value: date },
    });
    fireEvent.change(screen.getByLabelText(/Time:/i), {
      target: { value: time },
    });
    fireEvent.change(screen.getByLabelText(/Guests:/i), {
      target: { value: numGuests },
    });
  };

  test("Submit button is disabled when name is empty", () => {
    fillForm({
      name: "",
      email: "john@example.com",
      date: new Date().toISOString().split("T")[0],
      time: "18:00",
      numGuests: 2,
    });

    const submitButton = screen.getByRole("button", {
      name: /Reserve a Table/i,
    });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is disabled when email is invalid", () => {
    fillForm({
      name: "John Doe",
      email: "invalid-email",
      date: new Date().toISOString().split("T")[0],
      time: "18:00",
      numGuests: 2,
    });

    const submitButton = screen.getByRole("button", {
      name: /Reserve a Table/i,
    });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is disabled when date is empty", () => {
    fillForm({
      name: "John Doe",
      email: "john@example.com",
      date: "",
      time: "18:00",
      numGuests: 2,
    });

    const submitButton = screen.getByRole("button", {
      name: /Reserve a Table/i,
    });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is disabled when time is empty", () => {
    fillForm({
      name: "John Doe",
      email: "john@example.com",
      date: new Date().toISOString().split("T")[0],
      time: "",
      numGuests: 2,
    });

    const submitButton = screen.getByRole("button", {
      name: /Reserve a Table/i,
    });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is disabled when number of guests is less than 1", () => {
    fillForm({
      name: "John Doe",
      email: "john@example.com",
      date: new Date().toISOString().split("T")[0],
      time: "18:00",
      numGuests: 0,
    });

    const submitButton = screen.getByRole("button", {
      name: /Reserve a Table/i,
    });
    expect(submitButton).toBeDisabled();
  });
});
