/**
 * Created by gireesh.babu on 22/01/15.
 */
var PushMessage = require('../../../express_app/pushMessage/service');

var pushMessage = new PushMessage();

describe('Service Should be Instantiable', function () {

    it('should be able to call a method', function () {

        expect(pushMessage).not.toBeUndefined();
        pushMessage.push({param:function(key){
            return 1;

        }},{});

    });
});





   
