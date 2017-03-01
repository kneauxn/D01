// this is going to be the interface that validates all throws. Since all game-types require the same validation I don't want to duplicate the validation code for each game-type. However, I am writing it in the x01 game type initially for development purposes.
import { FormControl, } from '@angular/forms';

export interface ThrowValidator {
  function throwValidator(c: FormControl){[key: string]: boolean} | null {
    return null
}

}
