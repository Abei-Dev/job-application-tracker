# Job Application Tracker

A simple job application tracker built with React that helps users keep track of jobs they have applied for and update their application progress.

## Features

- Add a job application with a company name and position
- New applications automatically start with an "Applied" status
- Update application status to:
  - Applied
  - Interview
  - Offer
  - Rejected
- Delete job applications
- Save applications using localStorage
- Applications remain after refreshing the page
- Responsive dark-themed interface

## Built With

- React
- JavaScript
- CSS
- localStorage
- Vite

## What I Practiced

This project helped me practice:

- React components
- Props
- State with `useState`
- Updating arrays in React state
- Controlled inputs
- Event handling
- Rendering lists with `.map()`
- Updating items with `.map()`
- Removing items with `.filter()`
- `useEffect`
- localStorage
- Passing functions between components

## Component Structure

- `App` — owns and manages the jobs state
- `JobForm` — collects new job information
- `JobList` — displays jobs and allows status changes and deletion
- `Header` — displays the application heading
