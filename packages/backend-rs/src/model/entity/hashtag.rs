//! `SeaORM` Entity, @generated by sea-orm-codegen 1.0.0

use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
#[sea_orm(table_name = "hashtag")]
#[macros::export(object, js_name = "Hashtag")]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub id: String,
    #[sea_orm(unique)]
    pub name: String,
    #[sea_orm(column_name = "mentionedUserIds")]
    pub mentioned_user_ids: Vec<String>,
    #[sea_orm(column_name = "mentionedUsersCount")]
    pub mentioned_users_count: i32,
    #[sea_orm(column_name = "mentionedLocalUserIds")]
    pub mentioned_local_user_ids: Vec<String>,
    #[sea_orm(column_name = "mentionedLocalUsersCount")]
    pub mentioned_local_users_count: i32,
    #[sea_orm(column_name = "mentionedRemoteUserIds")]
    pub mentioned_remote_user_ids: Vec<String>,
    #[sea_orm(column_name = "mentionedRemoteUsersCount")]
    pub mentioned_remote_users_count: i32,
    #[sea_orm(column_name = "attachedUserIds")]
    pub attached_user_ids: Vec<String>,
    #[sea_orm(column_name = "attachedUsersCount")]
    pub attached_users_count: i32,
    #[sea_orm(column_name = "attachedLocalUserIds")]
    pub attached_local_user_ids: Vec<String>,
    #[sea_orm(column_name = "attachedLocalUsersCount")]
    pub attached_local_users_count: i32,
    #[sea_orm(column_name = "attachedRemoteUserIds")]
    pub attached_remote_user_ids: Vec<String>,
    #[sea_orm(column_name = "attachedRemoteUsersCount")]
    pub attached_remote_users_count: i32,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}