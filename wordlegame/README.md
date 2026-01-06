This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





User
 ↓
GuessInput
 (takes user input)
 ↓
handleSubmitGuess()
 ↓
Game  ←─────────────── Main State Holder
 │
 │  State:
 │  - answer
 │  - guesses
 │  - gameStatus
 │
 ├───────────► GuessResult  (receives guesses, answer)
 │                 │
 │                 └──► Guess  (one guess = one row)
 │                           │
 │                           └──► Cell  (one letter + status)
 │
 ├───────────► WonBanner   (shown when gameStatus === "won")
 │
 └───────────► LostBanner  (shown when gameStatus === "lost")




📘 Wordle App 

Game is the main component that stores all important state:

answer

guesses

gameStatus

GuessInput is used to take input from the user.

On submit, it calls handleSubmitGuess

This function updates the guesses array in Game

Updated guesses are passed down to GuessResult as props.

GuessResult loops fixed times and sends one word at a time to Guess.

Each Guess component displays one row of the board.

It compares the word with answer

Breaks it into letters and assigns colors

Cell displays one letter with its status (color).

WonBanner and LostBanner are shown conditionally based on gameStatus.

Data flows down using props.

User actions flow up using callback functions.