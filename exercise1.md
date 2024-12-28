1. **Linting/testing/building in Python**  
   In Python, two common options for linting are `pylint` and `mypy`. Both can be integrated into an IDE that is useful for writing clean code. For testing, libraries like `unittest`, `doctest`, and `pytest` are commonly used, each bringing its unique features.  
   Generally, Python apps don't require building, unless you want to compile them into an executable, in which case the `PyInstaller` library is useful.

2. **Continuous Integration (CI) Options**  
   There are tons of options for CI. One of the common ones is **Bamboo**, a CI/CD and build server from Atlassian that integrates seamlessly with Jira and other ecosystem products. Another one is **TeamCity**, a product of JetBrains that works best with their IDEs.

3. **Self-hosting vs. Cloud-based Environment**  
   In this case, more information would be required to decide whether to self-host or use a cloud-based environment. The following information would help to make the decision:

   - **Internal security policies**: If the application requires a high level of security, the choice would lean towards self-hosting.
   - **Customization vs. speed**: While cloud tools offer quick deployment with minimal setup, they can limit customization, as custom tools may not be natively supported.
   - **Expertise and experience**: If the ideal tools are not apparent, it makes sense to stick with the ones you are most familiar with.
