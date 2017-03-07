/// <reference path="../../typings/index.d.ts" />

import {isEmpty} from "../../nixin-form/scripts/modules/_nixin-IDCheck";

describe('_nixin_IDCheck', function(){
    describe('isEmpty', function () {
        it('should return true if value == null', function(){
            expect(isEmpty(null)).toBeTruthy();
       });
   }) ;
});
