import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, Log, NavItem } from './types';

const contentDirectory = path.join(process.cwd(), 'src', 'content');

export function getAllProjects(): Project[] {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        status: data.status || 'experimental',
        github: data.github,
        demo: data.demo,
        tags: data.tags || [],
        summary: data.summary || '',
        content,
      } as Project;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return projects;
}

export function getProjectBySlug(slug: string): Project | null {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    status: data.status || 'experimental',
    github: data.github,
    demo: data.demo,
    tags: data.tags || [],
    summary: data.summary || '',
    content,
  } as Project;
}

export function getAllLogs(): Log[] {
  const logsDirectory = path.join(contentDirectory, 'logs');
  
  if (!fs.existsSync(logsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(logsDirectory);
  
  const logs = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(logsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        mood: data.mood,
        tags: data.tags || [],
        content,
      } as Log;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return logs;
}

export function getLogBySlug(slug: string): Log | null {
  const logsDirectory = path.join(contentDirectory, 'logs');
  const fullPath = path.join(logsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    mood: data.mood,
    tags: data.tags || [],
    content,
  } as Log;
}

export function getProjectNavItems(): NavItem[] {
  const projects = getAllProjects();
  return projects.slice(0, 5).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    demo: p.demo,             // ← ADD THIS
  }));
}

export function getLogNavItems(): NavItem[] {
  const logs = getAllLogs();
  return logs.slice(0, 3).map((l) => ({
    slug: l.slug,
    title: l.title,
    date: l.date,
  }));
}
