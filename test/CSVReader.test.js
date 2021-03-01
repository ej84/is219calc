const City = require('../src/model/City');
const CSVReader = require("../src/CSVReader");
test('CSVReader read file (has an output)', () => {
    let result = CSVReader.Read_CSV('data/WorldCities.csv', City);
    expect(result).toBeInstanceOf(Array);
});
test('CSVReader correct amount of records', () => {
    let result = CSVReader.Read_CSV('data/WorldCities.csv', City);
    expect(result).toHaveLength(6);
});
test('CSVReader correct output model type', () => {
    let result = CSVReader.Read_CSV('data/WorldCities.csv', City);
    result.forEach(function (data) {
        expect(data).toBeInstanceOf(City);
    })
});
test('CSVReader create correctly populated model in output', () => {
    let result = CSVReader.Read_CSV('data/WorldCities.csv', City);
    expect(result[0]).toEqual(
        expect.objectContaining({
            city:'Tokyo',
            city_ascii:'Tokyo',
            lat:'35.6850',
            lng:'139.7514',
            iso2:'JP',
            iso3:'JPN',
            admin_name:'Tōkyō',
            capital:'primary',
            id:'1392685764'
        })
    );
});