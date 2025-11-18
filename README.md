
# Cypress Assessment - Uilecan Valentin

## Project Overview

This repository contains end-to-end automated tests using Cypress for various scenarios, including eMag shopping and AirportLabs sections. The project is organized for clarity and maintainability, with tests and page objects separated by domain.

## Folder Structure

Cypress-assessment-Uilecan-Valentin/
├── cypress.config.js
├── package.json
├── README.md
├── cypress/
│   ├── e2e/
│   │   ├── airportlabs_tests/
│   │   │   ├── scenario1_section.cy.js
│   │   │   ├── scenario2_numbers.cy.js
│   │   │   ├── scenario3_social.cy.js
│   │   │   ├── scenario4_logo.cy.js
│   │   │   ├── scenario5_custom.cy.js
│   │   ├── Emag/
│   │   │   └── emag_scenario.cy.js
│   │   ├── pages/
│   │   │   ├── homepage.js
│   │   │   └── shoppingpage.js
│   ├── fixtures/
│   │   └── products_years.json
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js


- **e2e/**: Contains all test scenarios grouped by domain.
- **pages/**: Page Object files for reusable selectors and actions.
- **fixtures/**: Test data in JSON format.
- **support/**: Custom commands and Cypress support files.

## Cypress Version

This project uses **Cypress v15.6.0**

## Installation

1. Clone the repository:
	
	git clone https://github.com/Uilecan/Cypress-assessment-Uilecan-Valentin
	cd Cypress-assessment-Uilecan-Valentin

2. Install dependencies:

	npm install

## Running Tests

To open the Cypress Test Runner:

npx cypress open
