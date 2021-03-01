const parse = require('csv-parse/lib/sync')
const fs = require('fs');

class CSVReader{
    static Read_CSV(file_path, model_type) {
        const options = {
            columns: true,
            delimiter: ',',
            trim: true,
            skip_empty_lines: true
        };
        let fileContents = fs.readFileSync(file_path);
        const records = parse(fileContents, options)
        let list = Array();
        records.forEach(function (data) {
            list.push(model_type.create(data));
        })

        return list;

    }
}
module.exports = CSVReader;