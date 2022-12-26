const Calculator = require('../calculator.js')

describe('Calculator', () => {
  let cal
  beforeEach(() => {
    cal = new Calculator()
  })

  it('inits with 0', () => {
    expect(cal.value).toBe(0)
  })

  it('set', () => {
    cal.set(2)
    expect(cal.value).toBe(2)
  })

  it('clear', () => {
    cal.set(9)
    cal.clear()
    expect(cal.value).toBe(0)
  })

  it('add', () => {
    cal.set(1)
    cal.add(2)

    expect(cal.value).toBe(3)
  })

  it('num > 100 === error', () => {
    expect(() => {
      cal.add(101)
    }).toThrow(Error)
  })

  it('subtracts', () => {
    cal.subtract(1)

    expect(cal.value).toBe(-1)
  })

  it('multiplies', () => {
    cal.set(2)
    cal.multiply(2)

    expect(cal.value).toBe(4)
  })

  describe('divides', () => {
    it('NaN', () => {
      cal.divide(0)
      expect(cal.value).toBe(NaN)
    })
    it('Infinity', () => {
      cal.set(1)
      cal.divide(0)
      expect(cal.value).toBe(Infinity)
    })
    it('1', () => {
      cal.set(2)
      cal.divide(2)

      expect(cal.value).toBe(1)
    })
  })
})
