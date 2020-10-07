# Caesar Cipher CLI

Утилита для шифровки и дешифровки текста с использованием [шифра Цезаря](https://en.wikipedia.org/wiki/Caesar_cipher)

## Установка

npm:
`git clone https://github.com/uaolmer/nodejs-course.git`&nbsp;&nbsp;
`cd caesar-sipher-cli`&nbsp;&nbsp;
`npm install`&nbsp;&nbsp;

## Использование

CLI утилита должна принимать 4 параметра:

-s, --shift: сдвиг по шифру&nbsp;&nbsp;
-i, --input: файл чтения&nbsp;&nbsp;
-o, --output: файл записи&nbsp;&nbsp;
-a, --action: кодирование/декодирование (encode/decode)&nbsp;&nbsp;

Параметры action и shift являются обязательными.

## Примеры

Для чтения и запись в файл:

$ node caesar-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"&nbsp;&nbsp;
$ node caesar-cli --action encode --shift 7 --input plain.txt --output encoded.txt&nbsp;&nbsp;
$ node caesar-cli --action decode --shift 7 --input decoded.txt --output plain.txt&nbsp;&nbsp;

Для работы с консолью:

$ node caesar-cli -a encode -s 7