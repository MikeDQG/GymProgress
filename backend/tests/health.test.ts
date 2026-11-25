import request from 'supertest';
import { describe, expect, it, vi } from 'vitest';
import { createApp } from '../src/app';

describe('Javna diagnostika API', () => {
  it('vrne stanje procesa brez preverjanja uporabnikove seje', async () => {
    const client = vi.fn();
    await request(createApp(client)).get('/api/health').expect(200, { status: 'ok' });
    expect(client).not.toHaveBeenCalled();
  });

  it('prepreči predpomnjenje stanja procesa', async () => {
    await request(createApp(vi.fn())).get('/api/health').expect('Cache-Control', 'no-store');
  });

  it('vrne 503, kadar preverjanje prijavne storitve ni nastavljeno', async () => {
    await request(createApp(vi.fn())).get('/api/health/auth').expect(503, { reachable: false });
  });

  it.each([
    { reachable: true, status: 200 },
    { reachable: false, status: 503 },
  ])('pri dosegljivosti $reachable vrne $status', async ({ reachable, status }) => {
    const app = createApp(vi.fn(), async () => ({ reachable }));
    await request(app).get('/api/health/auth').expect(status, { reachable });
  });

  it('vrne napako storitve, kadar preverjanje povezave odpove', async () => {
    const app = createApp(vi.fn(), vi.fn().mockRejectedValue(new Error('offline')));
    await request(app).get('/api/health/auth').expect(503, {
      error: 'Storitev trenutno ni dosegljiva.',
    });
  });
});
