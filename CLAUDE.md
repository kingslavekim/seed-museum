# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

한국토종씨앗박물관(Seed Museum) 웹사이트. React + TypeScript + Vite 기반 SPA.

## Commands

- **Dev server**: `npm run dev` (Vite dev server, --host enabled)
- **Build**: `npm run build` (TypeScript compile + Vite build, output: `dist/`)
- **Lint**: `npm run lint`
- **Preview**: `npm run preview`

## Deployment

- Production server: `3.36.174.240` (AWS Lightsail)
- SSH: `ssh -i ~/.ssh/LightsailDefaultKey-ap-northeast-2.pem ec2-user@3.36.174.240`
- Project path on server: `/module/seed-museum`
- Deploy: `sudo bash -c 'cd /module/seed-museum && git pull && npm run build'`
- Domain: `xn--od5bkdz9hntn.com` (Korean punycode domain)

## Architecture

**Stack**: React 19, TypeScript 5.8, Vite 6, MUI 7, React Router v7

**Routing**: All routes defined in `src/pages/app.tsx` (24 flat routes, one parameterized: `/notice/:id`)

**Component pattern**:
- `src/pages/` - Page components that compose header + content + footer
- `src/components/layout/` - Content components organized by tab (tab1~tab8)
- `src/components/layout/common/` - Shared header and footer
- Pages are thin wrappers; layout components hold the actual UI

**Tab structure** (maps to header navigation):
- tab1: 관람정보 (info, reservation, directions)
- tab2: 전시 (pdisplay, sdisplay, fdisplay, museum)
- tab3: 체험 (experience, experience2, socialFarm, healing)
- tab4: 씨앗유물 (seedRelics)
- tab5: 씨앗이야기 (seedStory)
- tab6: 문화행사 (open, sharing, slowFood, table, festival)
- tab7: 소개 (greetings, history, notice)
- tab8: 부스 (booth)

**State management**: Component-level useState/useEffect only, no global store

**Data**: Notice data fetched from `/notice/notice.json` (static JSON in public/)

**Static assets**: All in `public/` (banners, images by section). Banner images use numbered convention: `1.jpg`~`N.jpg` (desktop), `m_1.jpg`~`m_N.jpg` (mobile)

**Responsive design**: MUI sx prop with breakpoints (xs/md for mobile/desktop split). Banner and header have distinct mobile layouts.
