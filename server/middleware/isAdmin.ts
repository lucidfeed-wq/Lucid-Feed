import type { Request, Response, NextFunction } from 'express';

/**
 * Middleware to check if the authenticated user is an admin
 * For MVP: Uses environment variable ADMIN_USER_IDS (comma-separated list)
 * Future: Should use database role/permission system
 */
export function isAdmin(req: any, res: Response, next: NextFunction) {
  if (!req.user || !req.user.claims || !req.user.claims.sub) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const userId = req.user.claims.sub;
  const adminIds = process.env.ADMIN_USER_IDS?.split(',').map(id => id.trim()) || [];

  if (adminIds.length === 0) {
    // If no admin IDs configured, deny access for security
    console.warn('WARNING: ADMIN_USER_IDS not configured. Admin access denied.');
    return res.status(403).json({ error: 'Admin access not configured' });
  }

  if (!adminIds.includes(userId)) {
    return res.status(403).json({ error: 'Forbidden: Admin access required' });
  }

  next();
}
