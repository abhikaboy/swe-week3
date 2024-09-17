import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { ActionKeys } from '../enums/action-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';

describe('CalculatorModel', (): void => {
  let calculator: ICalculatorModel;

  beforeEach((): void => {
    calculator = new CalculatorModel();
  });

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {
    expect(calculator).toBeDefined();
  });

  it('should have an empty display on init', (): void => {
    // Act
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('');
  });

  it('should display `1` when the `1` key is pressed', (): void => {
    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('1');
  });

  it('should display `2` when the `2` key is pressed', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2');
  });

  it('should display 6 when preforming `2 * 3 =`', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual(6);
  });

  it('should display 12 when preforming `4 + 2 * 3 + 2 =`', (): void => {
    calculator.pressNumericKey(NumericKeys.FOUR);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual(12);
  });
});
