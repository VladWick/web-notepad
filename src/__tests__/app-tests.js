import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import App from '../App'

test('Testing "App" component', async () => {

  // Render 'App' component
  act(() => {
    render(<App />, screen);
  });

  // Exsiting of the "Notes" component
  let notes = screen.getAllByText('Notes');
  expect(notes[0]).toBeInTheDocument()

  // Is 'plus image' is on the page?
  expect(screen.getByRole('img')).toBeInTheDocument()
})


test('Testing notes menu', async () => {
  const {container} = render(<App />);
  
  // Five types of notes 
  const boxes = container.getElementsByClassName('sidebar_list_item');
  expect(boxes.length).toBe(5);
})


test('Testing notes', async () => {
  // Render 'App' component
  act(() => {
    render(<App />, screen);
  });

  let notes_box = screen.getAllByText('No Notes present');
  expect(notes_box[0]).toBeInTheDocument()
})
