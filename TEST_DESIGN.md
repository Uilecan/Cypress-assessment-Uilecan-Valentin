Why I chose this structure:

I tried to separate testcases for each domain within the same folder for more clarity and use POM design for reusability and maintainability purposes. I also added fixtures so that the values I verify are stored in one place and can be changed quickly if needed.

What I would add:
Try to figure a way to avoid using cy.wait() to make test cases run faster and more stable. I would try to use the loading elements in order to bypass this issue.

Easy vs fragile to maintain:
By choosing this structure I find it easy to update the selectors and UI changes since I have them all in one page element. Also by using fixtures for test data, it would be easy to update/add new data without changing the logic.

While testing I found it harder to maintain the Ui flows and the dinamic content. For example, after filtering by brand, I tried to add to chart the first product that is available but the website was showing me suggested products that did not follow the filtering that I applied so I had to check if the product contains the brand that I wanted to choose before adding it to chart.
If testcases are waiting for elements or the UI is just slower the test cases would be harder to maintain.