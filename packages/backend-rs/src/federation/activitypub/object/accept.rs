use super::*;
use crate::misc::user;

#[macros::export(object)]
pub struct ApAccept {
    pub id: String,
    pub r#type: Activity,
    pub actor: String,
    pub object: follow::ApFollow,
}

impl ApObject for ApAccept {}

impl ApAccept {
    #[allow(dead_code)] // TODO: remove this line by actually using it
    fn new(user_id: String, follow_object: follow::ApFollow) -> Self {
        Self {
            id: random_local_uri(),
            r#type: Activity::Accept,
            actor: user::local_uri(user_id),
            object: follow_object,
        }
    }
}

#[macros::ts_export]
pub fn render_accept(user_id: String, follow_object: follow::ApFollow) -> ApAccept {
    ApAccept::new(user_id, follow_object)
}