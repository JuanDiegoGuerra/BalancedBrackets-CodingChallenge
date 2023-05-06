const balancedBrackets = require('./challenge')
const assert = require('assert')

describe('Tests', function () {
  it('balanced_parenthesis_and_square_brackets', function () {
    // Failure message: 
    // Method called: balancedBrackets('(hello)[world]')
    assert(balancedBrackets('(hello)[world]') === true)
  })
  
  it('balanced_brackets', function () {
    // Failure message: 
    // Method called: balancedBrackets('{}')
    assert(balancedBrackets('{}') === true)
  })
  
  it('nested_balanced_brackets', function () {
    // Failure message: 
    // Method called: balancedBrackets('[({}{}{})([])]')
    assert(balancedBrackets('[({}{}{})([])]') === true)
  })

  it('unbalanced_with_no_closing', function () {
    // Failure message: 
    // Method called: balancedBrackets('(hello')
    assert(balancedBrackets('(hello') === false)
  })

  it('unbalanced_incorrect_nesting', function () {
    // Failure message: 
    // Method called: balancedBrackets('([)]')
    assert(balancedBrackets('([)]') === false)
  })

  it('unbalanced_closing_before_opening', function () {
    // Failure message: 
    // Method called: balancedBrackets(')(')
    assert(balancedBrackets(')(') === false)
  })
})
