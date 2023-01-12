import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react';


describe("emoji search test",()=>{
  let headerEl, searchEl, input = screen.getByTitle("input");;

  beforeEach(()=>{
    render(<App />); 
    headerEl = screen.getByText(/Emoji Search/i);
    searchEl = screen.getByText(/Click to copy emoji/i);
    console.log('beforeEach');
  }); 

  it("header", () => { 
    expect(headerEl).toBeInTheDocument();
  });

  it("search", () => { 
    expect(searchEl).toBeInTheDocument();
  });
  
  it("emoji check", () => { 
    const poop = "poop";
    fireEvent.change(input, { target: { value: poop } });
    expect(screen.getByText(poop)).toBeInTheDocument();
  });
  
  it("copy check", () => { 
    //??
  });
}) 
