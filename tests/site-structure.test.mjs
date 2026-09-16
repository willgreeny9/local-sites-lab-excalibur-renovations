import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));

const requiredRoutes = [
  'app/page.tsx',
  'app/services/page.tsx',
  'app/building/page.tsx',
  'app/plumbing-heating/page.tsx',
  'app/extensions-conversions/page.tsx',
  'app/kitchens-bathrooms/page.tsx',
  'app/carpentry/page.tsx',
  'app/projects/page.tsx',
  'app/about/page.tsx',
  'app/areas-covered/page.tsx',
  'app/testimonials/page.tsx',
  'app/contact/page.tsx',
  'app/privacy/page.tsx',
  'app/not-found.tsx',
  'app/robots.ts',
  'app/sitemap.ts',
];

test('all required routes are implemented', () => {
  for (const route of requiredRoutes) {
    assert.ok(exists(route), `Missing required route file: ${route}`);
  }
});

test('verified business facts and source notes are kept separately', () => {
  assert.ok(exists('lib/business.ts'));
  const source = read('lib/business.ts');
  for (const fact of [
    'Excalibur Renovations Ltd',
    '06748553',
    "Bishop's Stortford",
    '07989 556816',
    '01279 817 902',
    'Enquires@excalibur-renovations.co.uk',
    'Matthew Petchey',
    'Gas Safe',
    'Oftec',
    '2008',
  ]) {
    assert.match(source, new RegExp(fact.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }
  assert.match(source, /source/i);
  assert.match(source, /company-information\.service\.gov\.uk\/company\/06748553/i);
  assert.match(source, /stated-on-current-site/);
});

test('independent concept notice has required disclosure, sticky bar and dismiss paths', () => {
  assert.ok(exists('components/ConceptNotice.tsx'));
  const source = read('components/ConceptNotice.tsx');
  assert.match(source, /Local Sites Lab showcase/i);
  assert.match(source, /Excalibur Renovations/);
  assert.match(source, /did not ask for/i);
  assert.match(source, /has not approved it/i);
  assert.match(source, /not the live or official site/i);
  assert.match(source, /Get a site like this/i);
  assert.match(source, /Continue to Excalibur Renovations/i);
  assert.match(source, /About this sample/i);
  assert.match(source, /localsiteslab\.com/i);
  assert.match(source, /localStorage/i);
  assert.match(source, /lsl-logo/);
  assert.match(source, /stopPropagation/);
  assert.match(source, /modalRef/);
  assert.match(source, /pointerdown/);
  assert.match(source, /addEventListener\(\s*["']pointerdown["']/);
  assert.match(source, /contains\(event\.target/);
  assert.match(source, /Escape/);
  assert.match(source, /concept-close/);
  assert.match(source, /aria-label="Close concept notice"/);
  assert.match(source, /onClick=\{dismiss\}/);
  assert.match(source, /concept-bar/);
  assert.match(source, /William Green/);
  assert.doesNotMatch(source, /event\.target === event\.currentTarget/);
  assert.doesNotMatch(source, /Tip:/i);
  assert.doesNotMatch(source, /click outside/i);
  assert.match(source, /excalibur-renovations-concept-notice-dismissed-v5/);

  // Mount-gated open: no localStorage in useState initializer
  assert.doesNotMatch(source, /useState\(\s*\(\s*\)\s*=>/);
  assert.doesNotMatch(source, /useState\(\s*\(\)\s*=>\s*[\s\S]*localStorage/);
  assert.match(source, /const \[open, setOpen\] = useState\(false\)/);
  assert.match(source, /const \[mounted, setMounted\] = useState\(false\)/);
  assert.match(source, /setMounted\(true\)/);
  assert.match(source, /localStorage\.getItem\(storageKey\)/);
  assert.match(source, /setOpen\(!dismissed\)/);
  assert.match(source, /mounted && open/);
  assert.match(source, /removeEventListener\(\s*["']pointerdown["']/);
  assert.match(source, /removeEventListener\(\s*["']keydown["']/);
  assert.match(source, /onClick=\{reopen\}/);
  assert.match(source, /useCallback/);

  // Sticky bar sales ad
  assert.match(source, /concept-bar-logo/);
  assert.match(source, /concept-bar-cta/);
  assert.match(source, /Get a website like this to win more local work/i);
  assert.match(source, /concept-bar-copy/);

  const css = read('app/globals.css');
  const closeBlock = css.split('.concept-close {')[1].split('}')[0];
  assert.match(closeBlock, /background:\s*transparent/);
  assert.match(closeBlock, /border:\s*none/);
  assert.match(closeBlock, /border-radius:\s*0/);
  assert.match(closeBlock, /font-size:\s*1\.5rem/);
  assert.doesNotMatch(closeBlock, /border-radius:\s*50%/);
  assert.match(css, /pointer-events:\s*auto/);
  assert.match(css, /width:\s*min\(100%,\s*42rem\)/);
  assert.match(css, /#0B1220/i);
  assert.match(css, /#EAFF38/i);
});

test('ConceptNotice dismiss then remount reopen path is encoded for verification', () => {
  const source = read('components/ConceptNotice.tsx');
  // dismiss writes storage; mount effect reads it; reopen clears visual open without requiring storage clear
  assert.match(source, /localStorage\.setItem\(storageKey,\s*["']yes["']\)/);
  assert.match(source, /setOpen\(false\)/);
  assert.match(source, /setOpen\(true\)/);
  assert.match(source, /onClick=\{reopen\}/);
  assert.match(source, /About this sample/);
  // After remount, dismissed stays closed until reopen; reopen does not require clearing key first
  assert.match(source, /const dismissed = window\.localStorage\.getItem\(storageKey\) === ["']yes["']/);
});

test('concept is noindex and does not canonically impersonate the official domain', () => {
  const robots = read('app/robots.ts');
  const layout = read('app/layout.tsx');
  assert.match(robots, /disallow/i);
  assert.match(layout, /index:\s*false/i);
  assert.match(layout, /follow:\s*false/i);
  assert.doesNotMatch(layout, /excalibur-renovations\.co\.uk/i);
});

test('global CSS is a full design system without box-shadows or photo text overlays', () => {
  const css = read('app/globals.css');
  assert.ok(css.split('\n').length > 200, 'globals.css should be a full design system');
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media/);
  assert.match(css, /min-height:\s*44px/);
  assert.doesNotMatch(css, /box-shadow\s*:/);
  assert.doesNotMatch(css, /hero-shade/);
  for (const token of [
    '--ink',
    '--teal',
    '--cyan',
    '--sand',
    '--primary',
    '--on-primary',
    '--primary-container',
    '--on-primary-container',
    '--inverse-surface',
    '--inverse-on-surface',
    '--surface',
    '--on-surface',
    '.shell',
    '.hero',
    '.hero-split',
    '.hero-panel',
    '.credentials-strip',
    '.quote-band',
    '.pair-card',
    '.site-header',
    '.concept-bar',
    '.concept-modal',
    '.service-card',
    '.social-proof',
    '.contact-panel',
    '.site-footer',
    'position:\\s*sticky',
    'position:\\s*fixed',
  ]) {
    assert.match(css, new RegExp(token));
  }
});

test('homepage uses unique renovation journey section order', () => {
  const home = read('app/page.tsx');
  assert.match(home, /CredentialsStrip/);
  assert.match(home, /SocialProof/);
  assert.match(home, /QuoteBand/);
  assert.match(home, /ProjectPairs/);
  assert.match(home, /ServiceGrid/);
  assert.match(home, /ContactSection/);
  assert.match(home, /hero-split/);
  assert.match(home, /hero-panel/);
  assert.match(home, /hero-team\.jpg/);
  assert.doesNotMatch(home, /hero-shade/);
  // Order: Credentials before QuoteBand before ProjectPairs
  const cred = home.indexOf('<CredentialsStrip');
  const quote = home.indexOf('<QuoteBand');
  const pairs = home.indexOf('<ProjectPairs');
  const services = home.indexOf('<ServiceGrid');
  assert.ok(cred > -1 && quote > -1 && pairs > -1 && services > -1);
  assert.ok(cred < quote && quote < pairs && pairs < services, 'unique section order');
});

test('heroes are full-bleed split with solid copy panels', () => {
  const css = read('app/globals.css');
  const home = read('app/page.tsx');
  const pageHero = read('components/PageHero.tsx');
  assert.match(home, /className="hero"/);
  assert.match(css, /\.hero\s*\{[\s\S]*?max-width:\s*none/);
  assert.match(css, /\.hero-split/);
  assert.match(css, /\.page-hero[\s\S]*width:\s*100%/);
  assert.match(pageHero, /page-hero-grid/);
  assert.match(pageHero, /page-hero-image/);
  assert.doesNotMatch(pageHero, /hero-shade|scrim|overlay/i);
});

test('social proof has no divider under strip and balanced padding; no invented ratings', () => {
  const css = read('app/globals.css');
  const social = read('components/SocialProof.tsx');
  const proofBlock = css.split('.social-proof {')[1].split('}')[0];
  assert.match(proofBlock, /padding:\s*1\.35rem\s+0\s+1\.5rem/);
  assert.doesNotMatch(proofBlock, /border-bottom/);
  assert.doesNotMatch(social, /5\.0|Google reviews|Checkatrade rating/i);
  assert.match(social, /href="\/about#credentials"|href="\/testimonials"/);
  assert.match(social, /no invented review score/i);
});

test('project pairs and gallery captions sit on solid panels', () => {
  const pairs = read('components/ProjectPairs.tsx');
  const css = read('app/globals.css');
  assert.match(pairs, /pair-card-media/);
  assert.match(pairs, /pair-card-caption/);
  assert.match(css, /\.pair-card-caption/);
  assert.match(css, /\.gallery-tile-caption/);
  const pairCaption = css.split('.pair-card-caption {')[1].split('}')[0];
  assert.doesNotMatch(pairCaption, /position:\s*absolute/);
});

test('contact uses verified phones/email and labels demo form as not connected', () => {
  const contact = read('components/ContactSection.tsx');
  const page = read('app/contact/page.tsx');
  assert.match(contact, /mailto:\$\{business\.email\}/);
  assert.match(contact, /not connected/i);
  assert.match(contact, /demonstration/i);
  assert.match(read('lib/business.ts'), /Enquires@excalibur-renovations\.co\.uk/);
  assert.match(contact, /phoneMobileTel|phoneOfficeTel/);
  assert.doesNotMatch(page, /appointment booked|we will attend/i);
});

test('README is a Local Sites Lab concept readme with design brief path', () => {
  const readme = read('README.md');
  assert.match(readme, /Local Sites Lab/i);
  assert.match(readme, /excalibur-renovations\.co\.uk/i);
  assert.match(readme, /not.*official/i);
  assert.match(readme, /research\/design-brief\.md/);
  assert.match(readme, /npm (ci|test|run build)/i);
  assert.doesNotMatch(readme, /bootstrapped with/i);
  assert.ok(exists('research/design-brief.md'));
  const brief = read('research/design-brief.md');
  assert.match(brief, /https:\/\/m3\.material\.io/);
  assert.match(brief, /https:\/\/component\.gallery/);
  assert.match(brief, /https:\/\/designsystems\.one/);
  assert.match(brief, /Renovation Journey/i);
});

test('create-next-app starter SVGs and unused page.module.css are removed', () => {
  for (const file of [
    'public/next.svg',
    'public/vercel.svg',
    'public/globe.svg',
    'public/file.svg',
    'public/window.svg',
    'app/page.module.css',
  ]) {
    assert.equal(exists(file), false, `${file} should be removed`);
  }
});

test('layout mounts sticky concept notice with header and footer', () => {
  const layout = read('app/layout.tsx');
  assert.match(layout, /ConceptNotice/);
  assert.match(layout, /ScrollToTop/);
  assert.match(layout, /Header/);
  assert.match(layout, /Footer/);
});

test('privacy copy is independent and demo form does not send', () => {
  const privacy = read('app/privacy/page.tsx');
  assert.match(privacy, /independent/i);
  assert.match(privacy, /does not send/i);
});

test('real logo and brand colours are present', () => {
  assert.ok(exists('public/images/logo-white.png'));
  assert.ok(exists('public/images/hero-team.jpg'));
  assert.ok(exists('public/images/lsl-logo.svg'));
  const css = read('app/globals.css');
  assert.match(css, /#39847a/i);
  assert.match(css, /#40b0bf/i);
  assert.match(css, /#e5ddd5/i);
  assert.match(css, /#0f2a26/i);
  const header = read('components/Header.tsx');
  assert.match(header, /logo-white\.png/);
});

test('scroll margin accounts for sticky header', () => {
  const css = read('app/globals.css');
  assert.match(css, /scroll-padding-top:\s*calc\(var\(--header-h\)/);
  assert.match(css, /scroll-margin-top:\s*calc\(var\(--header-h\)/);
});
