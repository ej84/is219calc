const City = require('../src/model/City');
test('City create model', () => {
    let city_data = {
        id:1,
        city:'LittleFalls',
        city_ascii:'LittleFalls',
        lat:72,
        lng:45,
        country:'USA',
        iso2:'LF',
        iso3:'LFA',
        admin_name:'LittleFalls',
        capital:'primary',
        population: '7291'
    };
    let result = City.create(city_data);
    expect(result).toBeInstanceOf(City);
    expect(result.id).toBe(1);
    expect(result.city).toBe('LittleFalls');
    expect(result.city_ascii).toBe('LittleFalls');
    expect(result.lat).toBe(72);
    expect(result.lng).toBe(45);
    expect(result.iso2).toBe('LF');
    expect(result.iso3).toBe('LFA');
    expect(result.admin_name).toBe('LittleFalls');
    expect(result.capital).toBe('primary');
});

test('City create model with null data', () => {
    let result = City.create();
    expect(result).toBeInstanceOf(City);
    expect(result.id).toBeUndefined();
    expect(result.city).toBeUndefined();
    expect(result.city_ascii).toBeUndefined();
    expect(result.lat).toBeUndefined();
    expect(result.lng).toBeUndefined();
    expect(result.iso2).toBeUndefined();
    expect(result.iso3).toBeUndefined();
    expect(result.admin_name).toBeUndefined();
    expect(result.capital).toBeUndefined();
});