const AppError = require('../utils/AppError')
class PasswordController{
   create(request, response){
    const { numberOfCharacter, capitalLetter, specialCharacter } = request.query
        const capitalLetterY= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const capitalLetterN= 'abcdefghijklmnopqrstuvwxyz'
        const specialCharacterY= '!@#$%'
        let result = ''
        let quality

        if(isNaN(numberOfCharacter) || (!numberOfCharacter || numberOfCharacter<8)){
            throw new AppError("Number of characters is necessary! (only number and minimum 8 characters)")
        }

        if(capitalLetter && (capitalLetter!='y' && capitalLetter!='n')){         
            throw new AppError('Only (y) for Yes, and (n) for No')
        }

        if(specialCharacter && (specialCharacter!='y' && specialCharacter!='n')){
            throw new AppError('Only (y) for Yes, and (n) for No')
        }
        
        while(result.length < numberOfCharacter){

            if(capitalLetter == 'y'){
                result +=  capitalLetterY.charAt(Math.floor(Math.random()*capitalLetterY.length))
            }

            result += capitalLetterN.charAt(Math.floor(Math.random()*capitalLetterN.length))
            result += Math.floor(Math.random()*9)

            if(specialCharacter == 'y'){
                result += specialCharacterY.charAt(Math.floor(Math.random()*specialCharacterY.length))
            }
        }
        if((!capitalLetter || capitalLetter!='y') && (!specialCharacter || specialCharacter!='y')){
            quality = "Weak Password"
        }else if(capitalLetter=='y' && specialCharacter=='y'){
            quality = 'Very Good Password'
        }else if(capitalLetter=='y' || specialCharacter=='y'){
            quality = 'Good Password'
        }

        response.json({
            Password:result,
            Quality: quality
        })
    }

} 

module.exports = PasswordController