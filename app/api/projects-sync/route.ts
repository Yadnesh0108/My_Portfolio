import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface TrackedRepo {
  id: string;
  name: string;
  owner: string;
  repo: string;
  defaultCategory: string;
}

const TRACKED_REPOSITORIES: TrackedRepo[] = [
  {
    id: "BREW_BLOOM_CAFE",
    name: "Brew-Bloom-Cafe-ordering-system",
    owner: "Yadnesh0108",
    repo: "Brew-Bloom-Cafe-ordering-system",
    defaultCategory: "Full-Stack Web"
  },
  {
    id: "MOVIE_RECOMMENDER",
    name: "Movie_Recommendation_System",
    owner: "Yadnesh0108",
    repo: "Movie_Recommendation_System",
    defaultCategory: "Machine Learning"
  },
  {
    id: "SPAM_DETECTOR",
    name: "SMS-Email-Spam-Detection-Platform",
    owner: "Yadnesh0108",
    repo: "SMS-Email-Spam-Detection-Platform",
    defaultCategory: "NLP Classifier"
  },
  {
    id: "SENTIMENT_ANALYZER",
    name: "Social-Media",
    owner: "DevTitanz",
    repo: "Social-Media",
    defaultCategory: "Deep Learning // NLP"
  }
];

const FALLBACK_PROJECT_DATA: Record<string, any> = {
  BREW_BLOOM_CAFE: {
    id: "BREW_BLOOM_CAFE",
    name: "Brew-Bloom-Cafe-ordering-system",
    displayName: "Brew & Bloom Cafe",
    owner: "Yadnesh0108",
    repo: "Brew-Bloom-Cafe-ordering-system",
    stars: 1,
    forks: 0,
    openIssues: 0,
    pushedAt: "2026-06-14T11:04:52Z",
    pushedRelative: "Jun 14, 2026",
    isActive: true,
    latestCommit: {
      sha: "043a454",
      fullSha: "043a45434286a9317be80dedfe68468a44579bc7",
      message: "Add files via upload",
      author: "Yadnesh Kalyankar",
      date: "2026-06-14T11:04:50Z",
      relativeTime: "Jun 14, 2026",
      url: "https://github.com/Yadnesh0108/Brew-Bloom-Cafe-ordering-system/commit/043a45434286a9317be80dedfe68468a44579bc7"
    },
    recentCommits: [
      {
        sha: "043a454",
        fullSha: "043a45434286a9317be80dedfe68468a44579bc7",
        message: "Add files via upload",
        author: "Yadnesh Kalyankar",
        date: "2026-06-14T11:04:50Z",
        relativeTime: "Jun 14, 2026",
        url: "https://github.com/Yadnesh0108/Brew-Bloom-Cafe-ordering-system/commit/043a45434286a9317be80dedfe68468a44579bc7"
      },
      {
        sha: "05301fb",
        fullSha: "05301fbd19c51a144148b69ec9d8a7a17f611c6a",
        message: "Add files via upload",
        author: "Yadnesh Kalyankar",
        date: "2026-06-14T11:00:31Z",
        relativeTime: "Jun 14, 2026",
        url: "https://github.com/Yadnesh0108/Brew-Bloom-Cafe-ordering-system/commit/05301fbd19c51a144148b69ec9d8a7a17f611c6a"
      },
      {
        sha: "005fdc5",
        fullSha: "005fdc538e9241230059e1b1762e5a00d07d9913",
        message: "Add files via upload",
        author: "Yadnesh Kalyankar",
        date: "2026-06-14T10:53:09Z",
        relativeTime: "Jun 14, 2026",
        url: "https://github.com/Yadnesh0108/Brew-Bloom-Cafe-ordering-system/commit/005fdc538e9241230059e1b1762e5a00d07d9913"
      },
      {
        sha: "7eec5a3",
        fullSha: "7eec5a34c118d03c5f2404ddaa32b559d8e03629",
        message: "Add files via upload",
        author: "Yadnesh Kalyankar",
        date: "2026-06-14T10:51:44Z",
        relativeTime: "Jun 14, 2026",
        url: "https://github.com/Yadnesh0108/Brew-Bloom-Cafe-ordering-system/commit/7eec5a34c118d03c5f2404ddaa32b559d8e03629"
      },
      {
        sha: "540ab68",
        fullSha: "540ab688ca5a9c6a26f775a9f2314b26d219b2c0",
        message: "Add files via upload",
        author: "Yadnesh Kalyankar",
        date: "2026-06-14T10:50:41Z",
        relativeTime: "Jun 14, 2026",
        url: "https://github.com/Yadnesh0108/Brew-Bloom-Cafe-ordering-system/commit/540ab688ca5a9c6a26f775a9f2314b26d219b2c0"
      }
    ],
    htmlUrl: "https://github.com/Yadnesh0108/Brew-Bloom-Cafe-ordering-system"
  },
  MOVIE_RECOMMENDER: {
    id: "MOVIE_RECOMMENDER",
    name: "Movie_Recommendation_System",
    displayName: "MovieMatcher",
    owner: "Yadnesh0108",
    repo: "Movie_Recommendation_System",
    stars: 1,
    forks: 0,
    openIssues: 0,
    pushedAt: "2026-09-29T13:25:15Z",
    pushedRelative: "Just now",
    isActive: true,
    latestCommit: {
      sha: "e4f72c1",
      fullSha: "e4f72c15c9d8980e16e51e435968f1b7d2782a5f",
      message: "Rebrand to MovieMatcher, add official logo, optimize vector similarity and launch performance",
      author: "Yadnesh0108",
      date: "2026-09-29T13:24:51Z",
      relativeTime: "Today",
      url: "https://github.com/Yadnesh0108/Movie_Recommendation_System/commit/e4f72c15c9d8980e16e51e435968f1b7d2782a5f"
    },
    recentCommits: [
      {
        sha: "e4f72c1",
        fullSha: "e4f72c15c9d8980e16e51e435968f1b7d2782a5f",
        message: "Rebrand to MovieMatcher, add official logo, optimize vector similarity and launch performance",
        author: "Yadnesh0108",
        date: "2026-09-29T13:24:51Z",
        relativeTime: "Today",
        url: "https://github.com/Yadnesh0108/Movie_Recommendation_System/commit/e4f72c15c9d8980e16e51e435968f1b7d2782a5f"
      },
      {
        sha: "1e683eb",
        fullSha: "1e683eb4e36772e7ad528374edf5a106919ecc2d",
        message: "docs: update asset screenshots and README previews with modern UI showcases",
        author: "Yadnesh0108",
        date: "2026-09-27T10:44:23Z",
        relativeTime: "2d ago",
        url: "https://github.com/Yadnesh0108/Movie_Recommendation_System/commit/1e683eb4e36772e7ad528374edf5a106919ecc2d"
      },
      {
        sha: "3d5ebe1",
        fullSha: "3d5ebe19e61cebf9e5061a9b4041528c0dbcab4a",
        message: "Add files via upload",
        author: "Yadnesh Kalyankar",
        date: "2026-09-27T10:38:11Z",
        relativeTime: "2d ago",
        url: "https://github.com/Yadnesh0108/Movie_Recommendation_System/commit/3d5ebe19e61cebf9e5061a9b4041528c0dbcab4a"
      },
      {
        sha: "8a64622",
        fullSha: "8a6462219bda4a057a2a33fa66dce5549c47e904",
        message: "feat: complete CineMatch AI movie recommendation system with multi-source ratings, trailers, streaming availability, and modern UI",
        author: "Yadnesh0108",
        date: "2026-09-27T10:13:55Z",
        relativeTime: "2d ago",
        url: "https://github.com/Yadnesh0108/Movie_Recommendation_System/commit/8a6462219bda4a057a2a33fa66dce5549c47e904"
      }
    ],
    htmlUrl: "https://github.com/Yadnesh0108/Movie_Recommendation_System"
  },
  SPAM_DETECTOR: {
    id: "SPAM_DETECTOR",
    name: "SMS-Email-Spam-Detection-Platform",
    displayName: "SpamGuard",
    owner: "Yadnesh0108",
    repo: "SMS-Email-Spam-Detection-Platform",
    stars: 1,
    forks: 0,
    openIssues: 0,
    pushedAt: "2026-06-05T10:50:54Z",
    pushedRelative: "Jun 5, 2026",
    isActive: true,
    latestCommit: {
      sha: "839e5f6",
      fullSha: "839e5f6b58ecdabb869cd7d8279b0e2da21bf927",
      message: "Delete data",
      author: "Yadnesh Kalyankar",
      date: "2026-06-05T10:50:54Z",
      relativeTime: "Jun 5, 2026",
      url: "https://github.com/Yadnesh0108/SMS-Email-Spam-Detection-Platform/commit/839e5f6b58ecdabb869cd7d8279b0e2da21bf927"
    },
    recentCommits: [
      {
        sha: "839e5f6",
        fullSha: "839e5f6b58ecdabb869cd7d8279b0e2da21bf927",
        message: "Delete data",
        author: "Yadnesh Kalyankar",
        date: "2026-06-05T10:50:54Z",
        relativeTime: "Jun 5, 2026",
        url: "https://github.com/Yadnesh0108/SMS-Email-Spam-Detection-Platform/commit/839e5f6b58ecdabb869cd7d8279b0e2da21bf927"
      },
      {
        sha: "114e569",
        fullSha: "114e569a70adbe32f418165c29c2fa7f5e90e9bc",
        message: "Create data",
        author: "Yadnesh Kalyankar",
        date: "2026-06-05T10:50:25Z",
        relativeTime: "Jun 5, 2026",
        url: "https://github.com/Yadnesh0108/SMS-Email-Spam-Detection-Platform/commit/114e569a70adbe32f418165c29c2fa7f5e90e9bc"
      },
      {
        sha: "a56d90d",
        fullSha: "a56d90db2f5e9f66dfbd5717920374471ef70b66",
        message: "Delete data/spam.csv",
        author: "Yadnesh Kalyankar",
        date: "2026-06-05T10:49:52Z",
        relativeTime: "Jun 5, 2026",
        url: "https://github.com/Yadnesh0108/SMS-Email-Spam-Detection-Platform/commit/a56d90db2f5e9f66dfbd5717920374471ef70b66"
      },
      {
        sha: "453a59b",
        fullSha: "453a59b34d6114b7149d75a9068695990c08892d",
        message: "Add files via upload",
        author: "Yadnesh Kalyankar",
        date: "2026-05-29T16:51:59Z",
        relativeTime: "May 29, 2026",
        url: "https://github.com/Yadnesh0108/SMS-Email-Spam-Detection-Platform/commit/453a59b34d6114b7149d75a9068695990c08892d"
      },
      {
        sha: "4695eb5",
        fullSha: "4695eb5d3b67a72f0302a518840c7bc28f63c96d",
        message: "Add files via upload",
        author: "Yadnesh Kalyankar",
        date: "2026-04-15T06:39:21Z",
        relativeTime: "Apr 15, 2026",
        url: "https://github.com/Yadnesh0108/SMS-Email-Spam-Detection-Platform/commit/4695eb5d3b67a72f0302a518840c7bc28f63c96d"
      }
    ],
    htmlUrl: "https://github.com/Yadnesh0108/SMS-Email-Spam-Detection-Platform"
  },
  SENTIMENT_ANALYZER: {
    id: "SENTIMENT_ANALYZER",
    name: "Social-Media",
    displayName: "Social Sentiment Analyzer",
    owner: "DevTitanz",
    repo: "Social-Media",
    stars: 1,
    forks: 0,
    openIssues: 0,
    pushedAt: "2026-09-16T14:28:39Z",
    pushedRelative: "13d ago",
    isActive: true,
    latestCommit: {
      sha: "a14a54b",
      fullSha: "a14a54beca2dd6e2d278c94da0671d56dfda56a6",
      message: "Set plan to free in render.yaml",
      author: "Omkar Kaware",
      date: "2026-09-16T14:28:40Z",
      relativeTime: "13d ago",
      url: "https://github.com/DevTitanz/Social-Media/commit/a14a54beca2dd6e2d278c94da0671d56dfda56a6"
    },
    recentCommits: [
      {
        sha: "a14a54b",
        fullSha: "a14a54beca2dd6e2d278c94da0671d56dfda56a6",
        message: "Set plan to free in render.yaml",
        author: "Omkar Kaware",
        date: "2026-09-16T14:28:40Z",
        relativeTime: "13d ago",
        url: "https://github.com/DevTitanz/Social-Media/commit/a14a54beca2dd6e2d278c94da0671d56dfda56a6"
      },
      {
        sha: "3dd08ba",
        fullSha: "3dd08ba7ade2557cdd0bed12fea4bf3b96d8f3c6",
        message: "Configure production deployment with Gunicorn, Dockerfile, Procfile, and Render blueprint",
        author: "Omkar Kaware",
        date: "2026-09-16T14:20:53Z",
        relativeTime: "13d ago",
        url: "https://github.com/DevTitanz/Social-Media/commit/3dd08ba7ade2557cdd0bed12fea4bf3b96d8f3c6"
      },
      {
        sha: "e7d0ec3",
        fullSha: "e7d0ec323fce957fd03b6aa5c4517c100448f4f7",
        message: "docs: add comprehensive production README and update static assets",
        author: "Omkar Kaware",
        date: "2026-09-11T17:58:08Z",
        relativeTime: "18d ago",
        url: "https://github.com/DevTitanz/Social-Media/commit/e7d0ec323fce957fd03b6aa5c4517c100448f4f7"
      },
      {
        sha: "328fec6",
        fullSha: "328fec602cfeea2104f52253e980c90f00c629b9",
        message: "Update Social Media Sentiment Analyzer with latest features and clean repository",
        author: "Omkar Kaware",
        date: "2026-09-11T15:15:26Z",
        relativeTime: "18d ago",
        url: "https://github.com/DevTitanz/Social-Media/commit/328fec602cfeea2104f52253e980c90f00c629b9"
      },
      {
        sha: "32c61e2",
        fullSha: "32c61e23b04cd5391963c014e0f86b2ea0e831d1",
        message: "First Commit..",
        author: "Omkar Kaware",
        date: "2026-09-07T17:26:55Z",
        relativeTime: "22d ago",
        url: "https://github.com/DevTitanz/Social-Media/commit/32c61e23b04cd5391963c014e0f86b2ea0e831d1"
      }
    ],
    htmlUrl: "https://github.com/DevTitanz/Social-Media"
  }
};

// In-memory cache with 3-minute TTL to respect GitHub rate limits
let cache: {
  timestamp: number;
  data: any;
} | null = null;

const CACHE_TTL_MS = 3 * 60 * 1000;

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffSec < 60) return "Just now";
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
  if (diffSec < 2592000) return `${Math.floor(diffSec / 86400)}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export async function GET() {
  const now = Date.now();

  // Return cached data if still fresh
  if (cache && now - cache.timestamp < CACHE_TTL_MS) {
    return NextResponse.json({
      source: "cache",
      cachedAt: new Date(cache.timestamp).toISOString(),
      ...cache.data
    });
  }

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "techyhandz-portfolio-sync"
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // 1. Fetch live metadata and recent commits for all tracked repositories
    const projectResults = await Promise.all(
      TRACKED_REPOSITORIES.map(async (item) => {
        const fallback = FALLBACK_PROJECT_DATA[item.id];
        try {
          const [repoRes, commitsRes] = await Promise.all([
            fetch(`https://api.github.com/repos/${item.owner}/${item.repo}`, { headers }),
            fetch(`https://api.github.com/repos/${item.owner}/${item.repo}/commits?per_page=5`, { headers })
          ]);

          const repoData = repoRes.ok ? await repoRes.json() : null;
          const commitsData = commitsRes.ok ? await commitsRes.json() : null;

          let recentCommits = fallback?.recentCommits || [];
          if (Array.isArray(commitsData) && commitsData.length > 0) {
            recentCommits = commitsData.map((c: any) => ({
              sha: c.sha.slice(0, 7),
              fullSha: c.sha,
              message: c.commit?.message?.split("\n")[0] || "Update codebase",
              author: c.commit?.author?.name || c.author?.login || item.owner,
              date: c.commit?.author?.date || new Date().toISOString(),
              relativeTime: c.commit?.author?.date ? formatRelativeTime(c.commit.author.date) : "Recent",
              url: c.html_url
            }));
          }

          const latestCommit = recentCommits[0] || fallback?.latestCommit || null;
          const pushedAt = repoData?.pushed_at || latestCommit?.date || fallback?.pushedAt || null;

          let isActive = true;
          if (pushedAt) {
            const daysSincePush = (Date.now() - new Date(pushedAt).getTime()) / (1000 * 60 * 60 * 24);
            isActive = daysSincePush <= 90;
          }

          return {
            id: item.id,
            name: item.name,
            displayName: fallback?.displayName || item.name,
            owner: item.owner,
            repo: item.repo,
            stars: repoData?.stargazers_count ?? fallback?.stars ?? 0,
            forks: repoData?.forks_count ?? fallback?.forks ?? 0,
            openIssues: repoData?.open_issues_count ?? fallback?.openIssues ?? 0,
            pushedAt,
            pushedRelative: pushedAt ? formatRelativeTime(pushedAt) : fallback?.pushedRelative,
            isActive,
            latestCommit,
            recentCommits,
            htmlUrl: repoData?.html_url || `https://github.com/${item.owner}/${item.repo}`
          };
        } catch {
          return fallback || {
            id: item.id,
            name: item.name,
            owner: item.owner,
            repo: item.repo,
            stars: 0,
            forks: 0,
            pushedAt: null,
            pushedRelative: null,
            isActive: true,
            latestCommit: null,
            recentCommits: [],
            htmlUrl: `https://github.com/${item.owner}/${item.repo}`
          };
        }
      })
    );

    // 2. Discover any newly created repositories under Yadnesh0108 automatically
    let discoveredRepos: any[] = [];
    try {
      const userReposRes = await fetch("https://api.github.com/users/Yadnesh0108/repos?sort=pushed&per_page=10", { headers });
      if (userReposRes.ok) {
        const userRepos = await userReposRes.json();
        if (Array.isArray(userRepos)) {
          const trackedNames = new Set(TRACKED_REPOSITORIES.map((r) => r.name.toLowerCase()));
          discoveredRepos = userRepos
            .filter((r: any) => !r.fork && !trackedNames.has(r.name.toLowerCase()))
            .map((r: any) => ({
              name: r.name,
              description: r.description || "Active software repository",
              stars: r.stargazers_count,
              forks: r.forks_count,
              language: r.language || "TypeScript",
              pushedAt: r.pushed_at,
              pushedRelative: r.pushed_at ? formatRelativeTime(r.pushed_at) : "Recently",
              htmlUrl: r.html_url
            }));
        }
      }
    } catch {
      discoveredRepos = [];
    }

    const payload = {
      source: "live",
      syncedAt: new Date().toISOString(),
      projects: Object.fromEntries(projectResults.map((p) => [p.id, p])),
      discoveredRepos
    };

    cache = {
      timestamp: now,
      data: payload
    };

    return NextResponse.json(payload);
  } catch (error: any) {
    // If entire GitHub network call fails, serve verified fallback data seamlessly
    return NextResponse.json({
      source: "fallback",
      syncedAt: new Date().toISOString(),
      projects: FALLBACK_PROJECT_DATA,
      discoveredRepos: []
    });
  }
}
