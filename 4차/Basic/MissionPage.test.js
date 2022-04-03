import { render, screen } from "@testing-library/react";
import MissionPage from "../MissionPage";
import userEvent from "@testing-library/user-event";

describe('Basic Missoion', () => {
  test("the counter starts at 0", () => {
    render(<MissionPage />);
    const $txtCount = screen.getByTestId('txt_count', {
      name: '0'
    });
    expect($txtCount.textContent).toEqual('0');
  });
  
  test("minus button has correct text", () => {
    render(<MissionPage />);
    const $btnMinus = screen.getByTestId('btn_minus', {
      name: '-'
    });
    expect($btnMinus.textContent).toEqual('-');
  });
  
  test("plus button has correct text", () => {
    render(<MissionPage />);
    const $btnPlus = screen.getByTestId('btn_plus', {
      name: '+'
    });
    expect($btnPlus.textContent).toEqual('+');
  });
  
  test("When the - button is pressed, the counter changes to -1", () => {
    render(<MissionPage />);
    const $btnMinus = screen.getByTestId('btn_minus', {
      name: '-'
    });
    expect($btnMinus.click).toBeTruthy();
    userEvent.click($btnMinus);
  
    const $txtCount = screen.getByTestId('txt_count', {
      name: '0'
    });
    expect($txtCount.textContent).toEqual('-1');
  });
  
  test("When the + button is pressed, the counter changes to 1", () => {
    render(<MissionPage />);
    const $btnPlus = screen.getByTestId('btn_plus', {
      name: '+'
    });
    expect($btnPlus.click).toBeTruthy();
    userEvent.click($btnPlus);
  
    const $txtCount = screen.getByTestId('txt_count', {
      name: '0'
    });
    expect($txtCount.textContent).toEqual('1');
  });
  
  test("on/off button has blue color", () => {
    render(<MissionPage />);
    const $btnOnOff = screen.getByTestId('btn_onOff', {
      name: 'on/off'
    });
    expect($btnOnOff.style.color).toEqual('blue');
  });
  
  test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
    render(<MissionPage />);
    const $btnOnOff = screen.getByTestId('btn_onOff', {
      name: 'on/off'
    });
    expect($btnOnOff.click).toBeTruthy();
    userEvent.click($btnOnOff);
  
    const $btnPlus = screen.getByTestId('btn_plus', {
      name: '+'
    });
    expect($btnPlus.disabled).toBeTruthy();
  
    const $btnMinus = screen.getByTestId('btn_minus', {
      name: '-'
    });
    expect($btnMinus.disabled).toBeTruthy();
  });
})