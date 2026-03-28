# EllisBank Stack Architecture

## Core Flow

Input → /api/ingest → Dispatcher → Target Module → Response

## Modules

- Ledger: balances, transfers, transaction log
- Chain: crypto routing (future)
- Agent: automation + triggers

## ECH Mapping

- action → operation
- target → module
- data → payload

## Goal

Single control plane for financial execution, ingestion, and routing.
