const { Transform } = require('stream');
const caesarCipher = require('./cipher');
const fs = require('fs');
const path = require('path');
const errorHandler = require('./errorHandler');

const updateStream = {
    read: input => {
        if (input) {
            const file = path.resolve(input);
            return fs.createReadStream(file, 'utf-8');
        } else
            errorHandler('Input file does not exist', 9);

        return process.stdin;
    },
    transform: (shift, action) => {
        return new Transform ({
            transform(chunk, _encoding, callback) {
                this.push(caesarCipher.perform(chunk.toString('utf8'), shift, action));
                this.push('\n');
                callback();
            }
        })
    },
    write: output => {
        if (output) {
            const file = path.resolve(output);
            if (fs.existsSync(output))
                return fs.createWriteStream(file, {flags: 'a'});
        } else
            errorHandler("Output file does not exist", 9);

        return process.stdout;
    }
}

module.exports = updateStream;