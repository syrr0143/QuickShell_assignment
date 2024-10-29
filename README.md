# QuickSell Assignment

- Name: Sumit yadav
- Roll No.: 2101202cs
- Email (College): sumit.2101202cs@iiitbh.ac.in
- Email (Personal): yadav.sumit.works@gmail.com
- Hosted Site:

# Kanban Board Application

A responsive and interactive Kanban board application built with **React.js** and **pure CSS**. This app displays tasks grouped by Status, User, or Priority and allows sorting by Priority or Title, replicating the design and functionality requested in the assignment.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation & Setup](#installation--setup)
4. [API Integration](#api-integration)
5. [State Management](#state-management)
6. [Component Structure](#component-structure)
7. [Styling](#styling)
8. [Future Improvements](#future-improvements)
9. [Live Demo](#live-demo)

---

## Project Overview

This project is a Kanban board application that fetches ticket data from an external API and enables users to group tasks by status, assigned user, or priority. It also supports sorting by priority (descending) or title (ascending). The user's view is saved between sessions, ensuring continuity upon reload.

## Features

- **Dynamic Grouping**: Users can group tickets by Status, User, or Priority.
- **Sorting Options**: Users can sort tickets by Priority or Title.
- **Persistent View**: The selected grouping and sorting options are saved in local storage, ensuring the user's view is restored on page reload.
- **Responsive Design**: Optimized layout for both desktop and mobile views.

## Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/kanban-board-app.git
   cd kanban-board-app
   ```

2. **Install dependency**:
   ```bash
   npm install
   ```
3. **Run Application**:

   ```bash
   npm start

   ```

## API Integration

Data is fetched from the provided API endpoint: https://api.quicksell.co/v1/internal/frontend-assignment. The response includes ticket details like ID, title, user, status, and priority. This data is processed to implement grouping and sorting features efficiently.

Grouping is based on the selected criteria (Status, User, Priority).
Sorting uses JavaScript's sort() function with custom comparison functions for priority (descending) and title (ascending).

## State Management

React's useState and useEffect hooks manage the application state, including:

- <strong>Ticket Data</strong>: Fetched from the API and stored locally.
- <strong>Grouping & Sorting Options</strong>: Managed in state and stored in localStorage for session persistence.
- <strong>Display Toggle</strong>: Controls the modal for selecting grouping and sorting options.

## Component Structure

The application is divided into reusable, modular components for clarity and maintainability.

Components

- <strong>App </strong>: Main component handling data fetching and state management.
- <strong>DisplayButton </strong>: Toggles the view options modal.
- <strong>DisplayCard </strong>: Displays the grouped and sorted data dynamically based on user selections.
- <strong>Card </strong>: Represents individual tickets on the board.
- <strong>Column </strong>: Wraps a group of tickets (by Status, User, or Priority) in a flex layout for a Kanban-style display.

## Component Hierarchy

App
├── TopBar
│ └── DisplayButton
│ └── DisplayCard (Modal)
├── Main (Kanban board)
│ ├── Column (Grouped view)
│ │ └── Card (Ticket item)

## Styling

Pure CSS was used to ensure the design matches the provided screenshots precisely. Key styles include:

- <strong>Flexbox Layouts </strong>: Ensures responsiveness and a grid-style layout.
- <strong>CSS Variables </strong>: Centralized theme colors and styles for easy customization.
- <strong>CSS Modules </strong>: Used for component-scoped styling to prevent conflicts and promote reusability.

## Live Demo

You can view the **live demo** [here](https://your-deployed-link.com).
