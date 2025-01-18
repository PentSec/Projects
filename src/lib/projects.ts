import type { GitHubRepo } from '../types'

export async function getGitHubRepos(repoIds: number[]): Promise<GitHubRepo[]> {
    const kitty = import.meta.env.LOVE_MY_CAT

    if (!kitty) {
        throw new Error(
            'GitHub kitty is not defined. Please set the LOVE_MY_CAT environment variable.'
        )
    }

    const response = await fetch('https://api.github.com/users/PentSec/repos', {
        headers: {
            Authorization: `Bearer ${kitty}`
        }
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch repos: ${response.status} ${response.statusText}`)
    }

    const repos = await response.json()

    const filteredRepos: GitHubRepo[] = repos.filter((repo: GitHubRepo) =>
        repoIds.includes(repo.id)
    )

    return filteredRepos
}
