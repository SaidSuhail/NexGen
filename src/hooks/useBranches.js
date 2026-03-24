// src/hooks/useBranches.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  getAllBranches,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch,
} from '../Api/BranchApi'

const BRANCH_KEY = ['branches']

// ── Fetch all branches ──────────────────────────────────────
export function useBranches() {
  return useQuery({
    queryKey: BRANCH_KEY,
    queryFn: getAllBranches,
  })
}

// ── Fetch single branch ─────────────────────────────────────
export function useBranch(branchId) {
  return useQuery({
    queryKey: [...BRANCH_KEY, branchId],
    queryFn: () => getBranchById(branchId),
    enabled: !!branchId,       // only runs when branchId exists
  })
}

// ── Create ──────────────────────────────────────────────────
export function useCreateBranch() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createBranch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BRANCH_KEY })
    },
  })
}

// ── Update ──────────────────────────────────────────────────
export function useUpdateBranch() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ branchId, branchData }) => updateBranch(branchId, branchData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BRANCH_KEY })
    },
  })
}

// ── Delete ──────────────────────────────────────────────────
export function useDeleteBranch() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteBranch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BRANCH_KEY })
    },
  })
}