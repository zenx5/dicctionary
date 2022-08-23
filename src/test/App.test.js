import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { getWord } from '../ApiRequest'

jest.mock('../ApiRequest')

beforeEach(()=>{
  render(<App />)
  getWord.mockClear()
})

const getWordImplementation = word => {
  const definition = {
    "hello": "\"Hello!\" or an equivalent greeting."
  }[word.toLowerCase()];
  return [{
    word:"hello",
    meanings:[{
      partOfSpeech: "noun",
      definitions: [
          {
              "definition": definition,
              "synonyms": [],
              "antonyms": []
          }
      ]
    }]
  }]
}

const testHelloMeaning = async () => {
  const meaning = await screen.findByTestId(/\"Hello!\"oranequivalentgreeting./i)
  expect(meaning).toBeInTheDocument();
}

test('should title exists', () => {
  const title = screen.getByText(/Dicctionary/i);
  expect(title).toBeInTheDocument();
});

test('should renders form elements', ()=>{
  const input = screen.getByPlaceholderText(/insert word/i)
  const button = screen.getByText(/search/i)
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
})

test('should search a word after click at search', async ()=>{
  getWord.mockImplementation( getWordImplementation )
  const input = screen.getByPlaceholderText(/insert word/i)
  const button = screen.getByText(/search/i)
  fireEvent.change(input, { target:{ value:'hello' } })
  fireEvent.click(button)
  await testHelloMeaning()
})

test('should search a word after presskey Enter', async ()=>{
  getWord.mockImplementation( getWordImplementation )
  const input = screen.getByPlaceholderText(/insert word/i)
  const form = screen.getByTestId('id-test-form')
  fireEvent.change(input, { target:{ value:'hello' } })
  fireEvent.submit(form, {})
  await testHelloMeaning()
})

test("Should not exist loading string", async () => {
  getWord.mockImplementation( getWordImplementation )
  const input = screen.getByPlaceholderText(/insert word/i)
  const button = screen.getByText(/search/i)
  fireEvent.change(input, { target:{ value:'hello' } })
  fireEvent.click(button)
  await testHelloMeaning()  
  const loading = await screen.queryByText(/loading/i)
  expect(loading).not.toBeInTheDocument();
})

