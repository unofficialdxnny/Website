import json
import requests
from bs4 import BeautifulSoup


def get_book_image(title, author):
    # Construct the search query
    search_query = f"{title} {author} book cover"
    search_url = f"https://www.google.com/search?q={search_query}&tbm=isch"

    # Send a GET request to the search URL
    response = requests.get(search_url)
    if response.status_code == 200:
        # Parse the HTML response
        soup = BeautifulSoup(response.text, "html.parser")

        # Find the first image result
        img_tag = soup.find("img")

        # Extract the image URL
        if img_tag:
            return img_tag["src"]
        else:
            print("No image found.")
            return None
    else:
        print("Failed to fetch search results.")
        return None


def main():
    # Load book data from JSON file
    with open("books_info.json", "r") as f:
        data = json.load(f)

    # Iterate through each book entry in the JSON data
    for book in data:
        title = book.get("title", "")
        author = book.get("author", "")

        # Search for the book cover image based on title and author
        image_url = get_book_image(title, author)
        if image_url:
            print(f"Title: {title}, Author: {author}, Image URL: {image_url}")
        else:
            print(f"Title: {title}, Author: {author}, No image found.")


if __name__ == "__main__":
    main()
