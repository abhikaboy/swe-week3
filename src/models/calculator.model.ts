import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
export class CalculatorModel implements ICalculatorModel {
  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    // Should preform some sort of operation
    this._buffer += key;
  }

  /**
   * Preform some sort of special action
   * @param key: Clear, Equals, Dot
   */

  public pressActionKey(key: ActionKeys): void {
    // Should preform some sort of action
    switch (key) {
      case ActionKeys.CLEAR:
        this._buffer = '';
        break;
      case ActionKeys.EQUALS:
        // Evaluate the expression using built-in eval
        this._buffer = eval(this._buffer);
        break;
      case ActionKeys.DOT:
        this._buffer += '.';
        // Do nothing
        break;
    }
  }

  public display(): string {
    return this._buffer;
  }
}
