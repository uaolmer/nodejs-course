# Caesar Cipher CLI

Утилита для шифровки и дешифровки текста с использованием [шифра Цезаря](https://en.wikipedia.org/wiki/Caesar_cipher)

## Установка



## Использование

CLI утилита должна принимать 4 параметра:

-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode

Параметры action и shift являются обязательными.

## Примеры

Для чтения и запись в файл:

$ node caesar-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
$ node caesar-cli --action encode --shift 7 --input plain.txt --output encoded.txt
$ node caesar-cli --action decode --shift 7 --input decoded.txt --output plain.txt

Для работы с консолью:
$ node caesar-cli -a encode -s 7
