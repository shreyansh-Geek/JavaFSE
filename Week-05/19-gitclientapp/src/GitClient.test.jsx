import { describe, test, expect, vi } from 'vitest'
import axios from 'axios'
import GitClient from './GitClient'

vi.mock('axios')

describe("Git Client Tests", () => {
  test("should return repository names for techiesyed", async () => {
    const dummyData = {
      data: [
        { id: 1, name: "react-starter-kit" },
        { id: 2, name: "vite-portfolio" },
        { id: 3, name: "deep-learning-notes" }
      ]
    }

    axios.get.mockResolvedValue(dummyData)

    const client = new GitClient()
    const repos = await client.getRepositories("techiesyed")

    expect(repos).toEqual(["react-starter-kit", "vite-portfolio", "deep-learning-notes"])
    expect(axios.get).toHaveBeenCalledWith("https://api.github.com/users/techiesyed/repos")
  })
})
