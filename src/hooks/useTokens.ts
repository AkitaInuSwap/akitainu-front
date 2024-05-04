import { useCallback, useEffect, useState } from 'react'
import type { Token } from '@/core/domain/entities/Token'

const useTokens = () => {
  const [tokens, setTokens] = useState<Token[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchTokens = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/v1/tokens')
      if (!response.ok) {
        throw new Error('Failed to fetch tokens')
      }
      const data = await response.json()
      setTokens(data.data)
    } catch (error: unknown) {
      console.error(error)
      setError(error instanceof Error ? error : new Error('An error occurred'))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTokens().catch((error) =>
      console.error('Error fetching tokens:', error)
    )
  }, [fetchTokens])

  return { tokens, loading, error }
}

export default useTokens
