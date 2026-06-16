/**
 * Typings for @adobe/aio-lib-core-auth
 */

export interface TokenParams {
  clientId?: string
  clientSecret?: string
  orgId?: string
  scopes?: string[]
  [key: string]: unknown
}

export interface TokenResponse {
  access_token: string
  token_type: string
  expires_in: number
  [key: string]: unknown
}

/**
 * Generates an access token for authentication (with caching)
 * @param params - Parameters for token generation
 * @param params.clientId - The client ID (also accepts client_id)
 * @param params.clientSecret - The client secret (also accepts client_secret)
 * @param params.orgId - The organization ID (also accepts org_id)
 * @param [params.scopes = []] - Array of scopes to request
 * @param [imsEnv] - The IMS environment ('prod' or 'stage'); when omitted or falsy, uses stage if __OW_NAMESPACE starts with 'development-', else prod
 * @returns Promise that resolves with the token response
 * @throws If there's an error getting the access token
 */
export function generateAccessToken(params: TokenParams, imsEnv?: string): Promise<TokenResponse>

/**
 * Invalidates the token cache
 */
export function invalidateCache(): void

