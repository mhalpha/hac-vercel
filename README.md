# Heart Age Calculator

## Overview

The Heart Age Calculator is a web-based tool that calculates the user's heart age based on Australian health information. It takes various user inputs related to health and lifestyle and provides an estimate of their heart age.

## Features

- **Inputs:**
  - Age: Enter the age of the user.
  - Sex: Specify the user's gender.
  - Smoke: Indicate whether the user is a smoker.
  - Height: Enter the user's height.
  - Weight: Enter the user's weight.
  - Heart Disease: Specify if the user has a history of heart disease.
  - Diabetes: Indicate whether the user has diabetes.
  - Blood Pressure Medication: Specify if the user is on blood pressure medication.
  - Systolic Blood Pressure Level: Enter the user's systolic blood pressure.
  - Diastolic Blood Pressure: Enter the user's diastolic blood pressure.
  - Cholesterol Level: Specify the user's cholesterol level.
  - Total Cholesterol Level: Enter the total cholesterol level.
  - HBL Cholesterol Level: Enter the high-density lipoprotein (HDL) cholesterol level.
  - Email: Provide the user's email address.
  - First Name: Enter the user's first name.
  - Last Name: Enter the user's last name.
  - Postal Code: Enter the user's postal code.

- **Output:**
  - Heart Age: The calculated heart age based on the provided information.

## Installation

1. Installation:

   ```bash
   npm install
   ```

2. Development:

   ```bash
   npm run dev
   ```

## Usage

1. Open your web browser and go to [http://localhost:3000](http://localhost:3000).

2. Enter the required information in the form and click the "Calculate" button to obtain the heart age.

## Report Generation

If you wish to receive a report, the application supports integration with Microsoft Flow. To enable this feature:

1. Set up a Microsoft Flow account.

2. Create a flow using the provided URL:

   [Microsoft Flow - Heart Age Report](<https://prod-07.australiasoutheast.logic.azure.com:443/workflows/7029692bc9c7478bb177c7f2669e5f40/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=yX289pvxnzb74V5Mmc-zBFyDiYJMB62bN9wZkcmCwrE>)

3. Configure the flow to handle the data and send a report as desired.

## Disclaimer

This tool provides an estimate and should not be considered a substitute for professional medical advice. Always consult with a healthcare professional for accurate health assessments.

## Languages & tools

- [Node](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Next](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)