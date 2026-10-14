

# Task 10: JavaScript Event Loop

## Prediction

Before running the code, I predict that the output will be:

1. Start
2. End
3. Promise
4. Timeout

## Actual Output

```text
1. Start
4. End
3. Promise
2. Timeout
```

## Explanation

- `console.log("1. Start")` runs first because it is a normal synchronous statement.
- `setTimeout()` schedules its callback to run later, even when the delay is 0 milliseconds.
- `Promise.resolve().then()` schedules a Promise callback in the microtask queue.
- `console.log("4. End")` runs immediately because it is synchronous.
- After the synchronous code finishes, JavaScript runs the Promise callback.
- The timeout callback runs afterward from the task queue.

## Conclusion

JavaScript executes synchronous code first, then Promise microtasks, and then scheduled timer callbacks. A timeout of 0 milliseconds does not mean the callback runs immediately.
