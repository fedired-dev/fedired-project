import type { MigrationInterface, QueryRunner } from "typeorm";

export class chartReindex1629004542760 implements MigrationInterface {
	async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM "__chart__active_users" a USING "__chart__active_users" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__drive" a USING "__chart__drive" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__federation" a USING "__chart__federation" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__hashtag" a USING "__chart__hashtag" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__instance" a USING "__chart__instance" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__network" a USING "__chart__network" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__notes" a USING "__chart__notes" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__per_user_drive" a USING "__chart__per_user_drive" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__per_user_following" a USING "__chart__per_user_following" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__per_user_notes" a USING "__chart__per_user_notes" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__per_user_reaction" a USING "__chart__per_user_reaction" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__test_grouped" a USING "__chart__test_grouped" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__test_unique" a USING "__chart__test_unique" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(
			`DELETE FROM "__chart__users" a USING "__chart__users" b WHERE a.id < b.id AND ((a.group IS NULL AND b.group IS NULL) OR a.group = b.group) AND a.date = b.date;`,
		);
		await queryRunner.query(`DROP INDEX "IDX_0ad37b7ef50f4ddc84363d7ccc"`);
		await queryRunner.query(`DROP INDEX "IDX_00ed5f86db1f7efafb1978bf21"`);
		await queryRunner.query(`DROP INDEX "IDX_9a3ed15a30ab7e3a37702e6e08"`);
		await queryRunner.query(`DROP INDEX "IDX_13565815f618a1ff53886c5b28"`);
		await queryRunner.query(`DROP INDEX "IDX_7a170f67425e62a8fabb76c872"`);
		await queryRunner.query(`DROP INDEX "IDX_3313d7288855ec105b5bbf6c21"`);
		await queryRunner.query(`DROP INDEX "IDX_36cb699c49580d4e6c2e6159f9"`);
		await queryRunner.query(`DROP INDEX "IDX_76e87c7bfc5d925fcbba405d84"`);
		await queryRunner.query(`DROP INDEX "IDX_dd907becf76104e4b656659e6b"`);
		await queryRunner.query(`DROP INDEX "IDX_07747a1038c05f532a718fe1de"`);
		await queryRunner.query(`DROP INDEX "IDX_99a7d2faaef84a6f728d714ad6"`);
		await queryRunner.query(`DROP INDEX "IDX_25a97c02003338124b2b75fdbc"`);
		await queryRunner.query(`DROP INDEX "IDX_6b8f34a1a64b06014b6fb66824"`);
		await queryRunner.query(`DROP INDEX "IDX_da8a46ba84ca1d8bb5a29bfb63"`);
		await queryRunner.query(`DROP INDEX "IDX_39ee857ab2f23493037c6b6631"`);
		await queryRunner.query(`DROP INDEX "IDX_a1efd3e0048a5f2793a47360dc"`);
		await queryRunner.query(`DROP INDEX "IDX_7b5da130992ec9df96712d4290"`);
		await queryRunner.query(`DROP INDEX "IDX_0a905b992fecd2b5c3fb98759e"`);
		await queryRunner.query(`DROP INDEX "IDX_42eb716a37d381cdf566192b2b"`);
		await queryRunner.query(`DROP INDEX "IDX_7036f2957151588b813185c794"`);
		await queryRunner.query(`DROP INDEX "IDX_f09d543e3acb16c5976bdb31fa"`);
		await queryRunner.query(`DROP INDEX "IDX_5f86db6492274e07c1a3cdf286"`);
		await queryRunner.query(`DROP INDEX "IDX_e496ca8096d28f6b9b509264dc"`);
		await queryRunner.query(`DROP INDEX "IDX_30bf67687f483ace115c5ca642"`);
		await queryRunner.query(`DROP INDEX "IDX_7af07790712aa3438ff6773f3b"`);
		await queryRunner.query(`DROP INDEX "IDX_4b3593098b6edc9c5afe36b18b"`);
		await queryRunner.query(`DROP INDEX "IDX_b77d4dd9562c3a899d9a286fcd"`);
		await queryRunner.query(`DROP INDEX "IDX_84234bd1abb873f07329681c83"`);
		await queryRunner.query(`DROP INDEX "IDX_55bf20f366979f2436de99206b"`);
		await queryRunner.query(`DROP INDEX "IDX_5048e9daccbbbc6d567bb142d3"`);
		await queryRunner.query(`DROP INDEX "IDX_f7bf4c62059764c2c2bb40fdab"`);
		await queryRunner.query(`DROP INDEX "IDX_8cf3156fd7a6b15c43459c6e3b"`);
		await queryRunner.query(`DROP INDEX "IDX_229a41ad465f9205f1f5703291"`);
		await queryRunner.query(`DROP INDEX "IDX_0c641990ecf47d2545df4edb75"`);
		await queryRunner.query(`DROP INDEX "IDX_234dff3c0b56a6150b95431ab9"`);
		await queryRunner.query(`DROP INDEX "IDX_b14489029e4b3aaf4bba5fb524"`);
		await queryRunner.query(`DROP INDEX "IDX_437bab3c6061d90f6bb65fd2cc"`);
		await queryRunner.query(`DROP INDEX "IDX_bbfa573a8181018851ed0b6357"`);
		await queryRunner.query(`DROP INDEX "IDX_a0cd75442dd10d0643a17c4a49"`);
		await queryRunner.query(`DROP INDEX "IDX_b070a906db04b44c67c6c2144d"`);
		await queryRunner.query(`DROP INDEX "IDX_d41cce6aee1a50bfc062038f9b"`);
		await queryRunner.query(`DROP INDEX "IDX_a319e5dbf47e8a17497623beae"`);
		await queryRunner.query(`DROP INDEX "IDX_845254b3eaf708ae8a6cac3026"`);
		await queryRunner.query(`DROP INDEX "IDX_ed9b95919c672a13008e9487ee"`);
		await queryRunner.query(`DROP INDEX "IDX_337e9599f278bd7537fe30876f"`);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_9a3ed15a30ab7e3a37702e6e08" ON "__chart__active_users" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_60c5c6e7e538c09aa274ecd1cf" ON "__chart__active_users" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_3313d7288855ec105b5bbf6c21" ON "__chart__drive" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_ceab80a6729f8e2e6f5b8a1a3d" ON "__chart__drive" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_dd907becf76104e4b656659e6b" ON "__chart__federation" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_eddfed8fb40305a04c6f941050" ON "__chart__federation" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_25a97c02003338124b2b75fdbc" ON "__chart__hashtag" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_53a3604b939e2b479eb2cfaac8" ON "__chart__hashtag" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_39ee857ab2f23493037c6b6631" ON "__chart__instance" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_8111b817b9818c04d7eb8475b1" ON "__chart__instance" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_0a905b992fecd2b5c3fb98759e" ON "__chart__network" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_2082327b2699ce924fa654afc5" ON "__chart__network" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_f09d543e3acb16c5976bdb31fa" ON "__chart__notes" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_e60c358aaced5aab8900a4af31" ON "__chart__notes" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_30bf67687f483ace115c5ca642" ON "__chart__per_user_drive" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_a9a806d466b314f253a1a611c4" ON "__chart__per_user_drive" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_b77d4dd9562c3a899d9a286fcd" ON "__chart__per_user_following" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_dabbb38a51ab86ee3cab291326" ON "__chart__per_user_following" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_5048e9daccbbbc6d567bb142d3" ON "__chart__per_user_notes" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_583a157ed0cf0ed1b5ec2a833f" ON "__chart__per_user_notes" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_229a41ad465f9205f1f5703291" ON "__chart__per_user_reaction" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_3b7697a96f522d0478972e6d6f" ON "__chart__per_user_reaction" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_b14489029e4b3aaf4bba5fb524" ON "__chart__test_grouped" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_da522b4008a9f5d7743b87ad55" ON "__chart__test_grouped" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_a0cd75442dd10d0643a17c4a49" ON "__chart__test_unique" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_16effb2e888f6763673b579f80" ON "__chart__test_unique" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_a319e5dbf47e8a17497623beae" ON "__chart__test" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_dab383a36f3c9db4a0c9b02cf3" ON "__chart__test" ("date") WHERE "group" IS NULL`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_337e9599f278bd7537fe30876f" ON "__chart__users" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "IDX_66feba81e1795d176d06c0b1e6" ON "__chart__users" ("date") WHERE "group" IS NULL`,
		);
	}
	async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP INDEX "IDX_66feba81e1795d176d06c0b1e6"`);
		await queryRunner.query(`DROP INDEX "IDX_337e9599f278bd7537fe30876f"`);
		await queryRunner.query(`DROP INDEX "IDX_dab383a36f3c9db4a0c9b02cf3"`);
		await queryRunner.query(`DROP INDEX "IDX_a319e5dbf47e8a17497623beae"`);
		await queryRunner.query(`DROP INDEX "IDX_16effb2e888f6763673b579f80"`);
		await queryRunner.query(`DROP INDEX "IDX_a0cd75442dd10d0643a17c4a49"`);
		await queryRunner.query(`DROP INDEX "IDX_da522b4008a9f5d7743b87ad55"`);
		await queryRunner.query(`DROP INDEX "IDX_b14489029e4b3aaf4bba5fb524"`);
		await queryRunner.query(`DROP INDEX "IDX_3b7697a96f522d0478972e6d6f"`);
		await queryRunner.query(`DROP INDEX "IDX_229a41ad465f9205f1f5703291"`);
		await queryRunner.query(`DROP INDEX "IDX_583a157ed0cf0ed1b5ec2a833f"`);
		await queryRunner.query(`DROP INDEX "IDX_5048e9daccbbbc6d567bb142d3"`);
		await queryRunner.query(`DROP INDEX "IDX_dabbb38a51ab86ee3cab291326"`);
		await queryRunner.query(`DROP INDEX "IDX_b77d4dd9562c3a899d9a286fcd"`);
		await queryRunner.query(`DROP INDEX "IDX_a9a806d466b314f253a1a611c4"`);
		await queryRunner.query(`DROP INDEX "IDX_30bf67687f483ace115c5ca642"`);
		await queryRunner.query(`DROP INDEX "IDX_e60c358aaced5aab8900a4af31"`);
		await queryRunner.query(`DROP INDEX "IDX_f09d543e3acb16c5976bdb31fa"`);
		await queryRunner.query(`DROP INDEX "IDX_2082327b2699ce924fa654afc5"`);
		await queryRunner.query(`DROP INDEX "IDX_0a905b992fecd2b5c3fb98759e"`);
		await queryRunner.query(`DROP INDEX "IDX_8111b817b9818c04d7eb8475b1"`);
		await queryRunner.query(`DROP INDEX "IDX_39ee857ab2f23493037c6b6631"`);
		await queryRunner.query(`DROP INDEX "IDX_53a3604b939e2b479eb2cfaac8"`);
		await queryRunner.query(`DROP INDEX "IDX_25a97c02003338124b2b75fdbc"`);
		await queryRunner.query(`DROP INDEX "IDX_eddfed8fb40305a04c6f941050"`);
		await queryRunner.query(`DROP INDEX "IDX_dd907becf76104e4b656659e6b"`);
		await queryRunner.query(`DROP INDEX "IDX_ceab80a6729f8e2e6f5b8a1a3d"`);
		await queryRunner.query(`DROP INDEX "IDX_3313d7288855ec105b5bbf6c21"`);
		await queryRunner.query(`DROP INDEX "IDX_60c5c6e7e538c09aa274ecd1cf"`);
		await queryRunner.query(`DROP INDEX "IDX_9a3ed15a30ab7e3a37702e6e08"`);
		await queryRunner.query(`DROP INDEX "IDX_a9021cc2e1feb5f72d3db6e9f5"`);
		await queryRunner.query(`DROP INDEX "IDX_f22169eb10657bded6d875ac8f"`);
		await queryRunner.query(`DROP INDEX "IDX_c8cc87bd0f2f4487d17c651fbf"`);
		await queryRunner.query(`DROP INDEX "IDX_754499f9b2642336433769518d"`);
		await queryRunner.query(`DROP INDEX "IDX_315c779174fe8247ab324f036e"`);
		await queryRunner.query(`DROP INDEX "IDX_c5d46cbfda48b1c33ed852e21b"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_337e9599f278bd7537fe30876f" ON "__chart__users" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ed9b95919c672a13008e9487ee" ON "__chart__users" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_845254b3eaf708ae8a6cac3026" ON "__chart__users" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a319e5dbf47e8a17497623beae" ON "__chart__test" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d41cce6aee1a50bfc062038f9b" ON "__chart__test" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b070a906db04b44c67c6c2144d" ON "__chart__test" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a0cd75442dd10d0643a17c4a49" ON "__chart__test_unique" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_bbfa573a8181018851ed0b6357" ON "__chart__test_unique" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_437bab3c6061d90f6bb65fd2cc" ON "__chart__test_unique" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b14489029e4b3aaf4bba5fb524" ON "__chart__test_grouped" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_234dff3c0b56a6150b95431ab9" ON "__chart__test_grouped" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0c641990ecf47d2545df4edb75" ON "__chart__test_grouped" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_229a41ad465f9205f1f5703291" ON "__chart__per_user_reaction" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8cf3156fd7a6b15c43459c6e3b" ON "__chart__per_user_reaction" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f7bf4c62059764c2c2bb40fdab" ON "__chart__per_user_reaction" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5048e9daccbbbc6d567bb142d3" ON "__chart__per_user_notes" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_55bf20f366979f2436de99206b" ON "__chart__per_user_notes" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_84234bd1abb873f07329681c83" ON "__chart__per_user_notes" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b77d4dd9562c3a899d9a286fcd" ON "__chart__per_user_following" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4b3593098b6edc9c5afe36b18b" ON "__chart__per_user_following" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7af07790712aa3438ff6773f3b" ON "__chart__per_user_following" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_30bf67687f483ace115c5ca642" ON "__chart__per_user_drive" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e496ca8096d28f6b9b509264dc" ON "__chart__per_user_drive" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5f86db6492274e07c1a3cdf286" ON "__chart__per_user_drive" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f09d543e3acb16c5976bdb31fa" ON "__chart__notes" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7036f2957151588b813185c794" ON "__chart__notes" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_42eb716a37d381cdf566192b2b" ON "__chart__notes" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0a905b992fecd2b5c3fb98759e" ON "__chart__network" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7b5da130992ec9df96712d4290" ON "__chart__network" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a1efd3e0048a5f2793a47360dc" ON "__chart__network" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_39ee857ab2f23493037c6b6631" ON "__chart__instance" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_da8a46ba84ca1d8bb5a29bfb63" ON "__chart__instance" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6b8f34a1a64b06014b6fb66824" ON "__chart__instance" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_25a97c02003338124b2b75fdbc" ON "__chart__hashtag" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_99a7d2faaef84a6f728d714ad6" ON "__chart__hashtag" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_07747a1038c05f532a718fe1de" ON "__chart__hashtag" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_dd907becf76104e4b656659e6b" ON "__chart__federation" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_76e87c7bfc5d925fcbba405d84" ON "__chart__federation" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_36cb699c49580d4e6c2e6159f9" ON "__chart__federation" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3313d7288855ec105b5bbf6c21" ON "__chart__drive" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7a170f67425e62a8fabb76c872" ON "__chart__drive" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_13565815f618a1ff53886c5b28" ON "__chart__drive" ("date") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9a3ed15a30ab7e3a37702e6e08" ON "__chart__active_users" ("date", "group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_00ed5f86db1f7efafb1978bf21" ON "__chart__active_users" ("group") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0ad37b7ef50f4ddc84363d7ccc" ON "__chart__active_users" ("date") `,
		);
	}
}