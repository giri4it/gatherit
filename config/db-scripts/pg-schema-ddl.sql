create table advertisement_data(add_id integer not null, user_fk integer not null, file bytea, file_type varchar(20) );
alter table advertisement_data drop column add_id
ALTER TABLE advertisement_data ADD COLUMN ad_id BIGSERIAL PRIMARY KEY;

alter table advertisement_data add column file_description varchar(100);

create table device_register_map(key varchar(100) unique not null, mobile_num varchar(20));
alter table device_register_map alter column key type varchar(500);

create table user_login_info(login_name varchar(25) unique not null, password varchar(100));
