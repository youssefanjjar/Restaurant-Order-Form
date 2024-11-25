# Restaurant Order Form

A simple web application that allows customers to place online meal orders and calculates the total bill dynamically. If the total exceeds a specific amount, the customer gets a free dessert as a promotion.

## Features

- Select items from a menu (starter, main course, dessert) with an option for "none."
- Dynamically adjust the number of people for each item.
- Calculate the total cost and display a detailed bill.
- Notify the customer of promotions (e.g., free dessert for orders over $20).
- Clean and responsive design.

## Technologies Used

- **HTML**: For creating the structure of the form.
- **CSS**: For styling the form to make it user-friendly.
- **JavaScript**: For implementing dynamic behaviors, such as updating item quantities and calculating the bill.

## Getting Started

### Prerequisites

To run the project, you need:
- A modern web browser (e.g., Chrome, Firefox, Edge).
- (Optional) Python or a local server for advanced use cases.

### Installation

1. Clone the repository or download the files.
2. Ensure the following files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`

### Usage

1. Open the `index.html` file in a browser.
2. Select menu items, specify quantities, and click **Order** to generate a bill.
3. Review the bill in the provided `textarea`.

### Running with a Local Server (Optional)

To avoid browser restrictions and ensure smooth execution, consider running the project on a local server:

#### Using Python
```bash
cd /path/to/project
python -m http.server 8000
```
Then, open the application in your browser at:

```bash
http://localhost:8000
```
