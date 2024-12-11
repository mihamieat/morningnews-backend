from locust import HttpUser, task, between
import random

class BackendUser(HttpUser):
    # Wait time between requests (in seconds)
    wait_time = between(1, 5)

    @task
    def get_root(self):
        """Root stress test."""
        response = self.client.get("/")
        if response.status_code == 200:
            print("Root endpoint is accessible.")
        else:
            print(f"Root endpoint failed: {response.status_code}")

    @task(2)
    def get_articles(self):
        """Task to test the /articles endpoint."""
        response = self.client.get("/articles")
        if response.status_code == 200:
            print("Successfully fetched articles")
        else:
            print(f"Failed to fetch articles: {response.status_code} {response.text}")
