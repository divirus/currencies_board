import { mount } from "@vue/test-utils";
import Board from "../Board.vue";

const currencies = ['EUR', 'PLN', 'GEL', 'DKK', 'CZK', 'GBP', 'SEK', 'USD', 'RUB'];
const currenciesBoxes = [];

describe("Board.test.js", () => {
    const board = mount(Board);

    it('Board contains currency boxes', () => {
      expect(board.html()).toContain('currency-box');
    })
  
    it('Quantity of available currency boxes equals to currencies catalog length', () => {
      const boxes = board.findAll('.currency-box');

      expect(boxes).toHaveLength(9);
    });
    
    it('Every available currency box should have only 1 available currency box', () => {
      for(let i = 0; i < currencies.length; i++) {
        let boxName = board.findAll('.currencies-list.available .currency-box span').at(i).text();
        currenciesBoxes.push(boxName);
      }
      expect(currenciesBoxes).toEqual(currencies);
    });
})