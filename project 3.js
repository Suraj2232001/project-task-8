var userName = "suraj";
var n = userName.length;
if (n>0) {
    console.log(`Hello, ${userName}!`);  
} else {
    console.log(`Hello!`);
    }
var userQuestion = "how r u???";
console.log(`${userName}:- ${userQuestion}`)
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain' ;
        break;
        case 1:
            eightBall = 'It is decidedly so' ;
            break;
            case 2:
                eightBall = 'Reply hazy try again' ;
                break;
                case 3:
                    eightBall = 'Cannot predict now' ; 
                    break;
                    case 4:
                        eightBall = 'Do not count on it' ;
                        break;
                        case 5:
                            eightBall = 'My sources say no' ;
                            break;
                            case 6:
                                eightBall = 'Outlook not so good' ;
                                break;
                                case 7:
                                    eightBall = 'Signs point to yes' ;  
                                    break;
}
console.log(`the Magic eightBall answered:- ${eightBall}.`);
