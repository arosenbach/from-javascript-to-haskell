# From Javascript to Haskell

## Description

This prepared kata has been presented by Xavier Detant (Zenika).

While live coding a refactoring that transforms a imperative code to a functional one, main concepts of functional programming will be introduced when necessary and explained deeply.
At the end of this talk, you will understand these key concepts :

- Referential transparency
- Functions as first class citizens
- Higher order functions
- Closures
- Lambda calculus
- Currying
- Partial application
- Function composition
- «Point-free» notation

## YouTube links:

- [French version](https://www.youtube.com/watch?v=IQ1kDpGeoCk)
- [English version](https://www.youtube.com/watch?v=3d61Zo9T1OU)

## Javascript commands

Run test

```
npm test
```

## Haskell commands

Install dependencies:

```
cabal update && cabal install --package-env=. --lib hspec hspec-contrib
```

Run movieCollectionSpecs.hs:

```
runhaskell movieCollectionSpecs.hs
```
