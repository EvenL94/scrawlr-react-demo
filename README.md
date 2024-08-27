# Technical assessment for Scrawlr Development Inc.

By Evan Li

link to deployed site: [Link](https://evenl94.github.io/scrawlr-react-demo/)

### Instructions:

- Click any upvote button to toggle its state

- Click on the upvote list outside upvote buttons to toggle all buttons in the list

- Click the + button on the right side of any list to add a new upvote button to this list

- Click the Add New List button to add a new upvote list

- Click the Reset button to reset the page

### Notes and assumptions:

#### Assumptions:

Here are some assumptions made from the requirements forwarding implementation:

- All upvote buttons will be toggled to another state by clicking on the upvote list are outside the upvote buttons themselves.
- Since there can be different states of upvote buttons inside a list, a new added upvote button will duplicate the state from the last button in this list.
- A new added upvote list will start with a non-selected state upvote button, as well as the initial setting.

#### Features added for better UX

- A auto warpping when adding new upvote buttons that overflows the width.
- Buttons to add a new upvote list and reset to initial state.
- On hover color change for the Add New upvote + button.
