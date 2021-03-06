import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entites/Post';
import mikroOrmConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  orm.getMigrator().up();
  const post = orm.em.create(Post, { title: 'my first post' });

  await orm.em.persistAndFlush(post);
};

main();

console.log('hello here');
