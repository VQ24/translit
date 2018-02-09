import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
	name: 'rt'
})

export class RtPipe implements PipeTransform{
	transform (input) {
		return input.split('')
		    .map(function(item,i,arr){
			switch (item) {
			// russian 
			case 'а': {if (arr[i-1]=='а'){ return 'double a!';}else{return 'a';}}
			case 'б': {return 'b';}
			case 'в': {return 'v';}
			case 'г': {return 'g';}
			case 'д': {return 'd';}
			case 'е': {return 'e';}
			case 'ё': {return 'yo';}
			case 'ж': {return 'zh';}
			case 'з': {return 'z';}
			case 'и': {return 'i';}
			case 'й': {return 'j';}
			case 'к': {return 'k';}
			case 'л': {return 'l';}
			case 'м': {return 'm';}
			case 'н': {return 'n';}
			case 'о': {return 'o';}
			case 'п': {return 'p';}
			case 'р': {return 'r';}
			case 'с': {return 's';}
			case 'т': {return 't';}
			case 'у': {return 'u';}
			case 'ф': {return 'f';}
			case 'х': {return 'kh';}
			case 'ц': {return 'ts';}
			case 'ч': {return 'ch';}
			case 'ш': {return 'sh';}
			case 'щ': {return 'sch';}
			case 'ь': {return '';}
			case 'ъ': {return "'";}
			case 'ы': {return 'y';}
			case 'э': {return 'e';}
			case 'ю': {return 'yu';}
			case 'я': {return 'ya';}
			
			case 'А': {return 'A';}
			case 'Б': {return 'B';}
			case 'В': {return 'V';}
			case 'Г': {return 'G';}
			case 'Д': {return 'D';}
			case 'Е': {return 'Ye';}
			case 'Ё': {return 'Yo';}
			case 'Ж': {return 'Zh';}
			case 'З': {return 'Z';}
			case 'И': {return 'I';}
			case 'Й': {return 'J';}
			case 'К': {return 'K';}
			case 'Л': {return 'L';}
			case 'М': {return 'M';}
			case 'Н': {return 'N';}
			case 'О': {return 'O';}
			case 'П': {return 'P';}
			case 'Р': {return 'R';}
			case 'С': {return 'S';}
			case 'Т': {return 'T';}
			case 'У': {return 'U';}
			case 'Ф': {return 'F';}
			case 'Х': {return 'Kh';}
			case 'Ц': {return 'Ts';}
			case 'Ч': {return 'Ch';}
			case 'Ш': {return 'Sh';}
			case 'Щ': {return 'Sch';}
			case 'Ы': {return 'Y';}
			case 'Э': {return 'E';}
			case 'Ю': {return 'Yu';}
			case 'Я': {return 'Ya';}
			// english
			case 'a': {return 'а';}
			case 'b': {return 'б';}
			case 'c': {return 'ц';}
			case 'd': {return 'д';}
			case 'e': {return 'е';}
			case 'f': {return 'ф';}
			case 'g': {return 'г';}
			case 'h': {return 'х';}
			case 'i': {return 'и';}
			case 'j': {return 'дж';}
			case 'k': {return 'к';}
			case 'l': {return 'л';}
			case 'm': {return 'м';}
			case 'n': {return 'н';}
			case 'o': {return 'о';}
			case 'p': {return 'п';}
			case 'q': {return 'к';}
			case 'r': {return 'р';}
			case 's': {return 'с';}
			case 't': {return 'т';}
			case 'u': {return 'у';}
			case 'v': {return 'в';}
			case 'w': {return 'в';}
			case 'x': {return 'кс';}
			case 'y': {return 'ы';}
			case 'z': {return 'з';}
			
			case 'A': {return 'А';}
			case 'B': {return 'Б';}
			case 'C': {return 'Ц';}
			case 'D': {return 'Д';}
			case 'E': {return 'Е';}
			case 'F': {return 'Ф';}
			case 'G': {return 'Г';}
			case 'H': {return 'Х';}
			case 'I': {return 'И';}
			case 'J': {return 'Дж';}
			case 'K': {return 'К';}
			case 'L': {return 'Л';}
			case 'M': {return 'М';}
			case 'N': {return 'Н';}
			case 'O': {return 'О';}
			case 'P': {return 'П';}
			case 'Q': {return 'К';}
			case 'R': {return 'Р';}
			case 'S': {return 'С';}
			case 'T': {return 'Т';}
			case 'U': {return 'У';}
			case 'V': {return 'В';}
			case 'W': {return 'В';}
			case 'X': {return 'Кс';}
			case 'Y': {return 'Ы';}
			case 'Z': {return 'З';}
		}
		return item;
		})
		.join('');
	}

}