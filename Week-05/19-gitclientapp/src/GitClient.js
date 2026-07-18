import axios from 'axios'

export default class GitClient {
  async getRepositories(username) {
    if (!username) return []
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`)
      return response.data.map(repo => repo.name)
    } catch (err) {
      throw new Error(`Failed to fetch repositories: ${err.message}`)
    }
  }
}
